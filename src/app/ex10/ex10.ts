import { Component } from '@angular/core';

@Component({
  selector: 'app-ex10',
  standalone: false,
  templateUrl: './ex10.html',
  styleUrl: './ex10.css',
})
export class Ex10 {
  days = Array.from({ length: 31 }, (_, i) => i + 1);
  months = Array.from({ length: 12 }, (_, i) => i + 1);
  years = Array.from({ length: 201 }, (_, i) => 1900 + i);

  selectedDay = 1;
  selectedMonth = 1;
  selectedYear = 1990;

  lunarResult: any;

  convert() {
    const lunar = new LunarYear(
      this.selectedDay,
      this.selectedMonth,
      this.selectedYear
    );
    this.lunarResult = lunar.findLunarYearDetail();
  }
}
export class LunarYear {
  constructor(
    public day: number,
    public month: number,
    public year: number
  ) { }

  CAN = ['Canh', 'Tân', 'Nhâm', 'Quý', 'Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ'];
  CHI = ['Thân', 'Dậu', 'Tuất', 'Hợi', 'Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi'];

  findLunarYearDetail() {
    const solarDate = new Date(this.year, this.month - 1, this.day);

    // 1. Convert to Lunar using Intl
    // We only trust day and month from Intl 'chinese' calendar
    const parts = new Intl.DateTimeFormat('en-US', {
      calendar: 'chinese',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric' // We extract but might ignore
    }).formatToParts(solarDate);

    let lunarDay = 0;
    let lunarMonth = 0;

    parts.forEach(p => {
      if (p.type === 'day') lunarDay = parseInt(p.value);
      if (p.type === 'month') lunarMonth = parseInt(p.value);
    });

    // Deduce Lunar Year (Gregorian equivalent) based on simple heuristic
    // If we are in Jan/Feb (months 0, 1, sometimes 2) and Lunar Month is 11 or 12,
    // it implies we haven't reached Tet yet, so it belongs to previous year.
    let calculatedLunarYear = this.year;
    if (lunarMonth >= 11 && this.month <= 2) {
      calculatedLunarYear--;
    }

    // Can Chi Calculations
    const yearCan = this.CAN[calculatedLunarYear % 10];
    const yearChi = this.CHI[calculatedLunarYear % 12];
    const yearName = `${yearCan} ${yearChi}`;

    // Month Name (Approximate)
    const yearCanIndex = calculatedLunarYear % 10;
    const startMonthCanIndex = (yearCanIndex % 5 + 1) * 2;
    const monthCanIndex = (startMonthCanIndex + lunarMonth - 1) % 10;
    const monthChiIndex = (lunarMonth + 2 - 1) % 12;
    const monthName = `${this.CAN[monthCanIndex]} ${this.CHI[monthChiIndex]}`;

    // Day Can Chi requires JDN
    const jdn = this.getJulianDay(this.day, this.month, this.year);
    const dayCanIndex = (jdn + 9) % 10;
    const dayChiIndex = (jdn + 1) % 12;
    const dayName = `${this.CAN[dayCanIndex]} ${this.CHI[dayChiIndex]}`;

    // Define lunarDateText
    const lunarDateText = `${lunarDay}/${lunarMonth}/${calculatedLunarYear}`;

    // Day of Week
    const daysOfWeek = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const dayOfWeek = daysOfWeek[solarDate.getDay()];

    return {
      lunarDate: lunarDateText,
      dayOfWeek: dayOfWeek,
      year: yearName,
      month: monthName,
      day: dayName
    };
  }

  getJulianDay(d: number, m: number, y: number): number {
    // Standard JDN formula
    let a = Math.floor((14 - m) / 12);
    let y1 = y + 4800 - a;
    let m1 = m + 12 * a - 3;
    return d + Math.floor((153 * m1 + 2) / 5) + 365 * y1 + Math.floor(y1 / 4)
      - Math.floor(y1 / 100) + Math.floor(y1 / 400) - 32045;
  }
}
