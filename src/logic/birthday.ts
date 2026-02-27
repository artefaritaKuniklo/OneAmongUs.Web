/**
 * Birthday detection utilities.
 *
 * Separated from helper.ts so that lunar-typescript is only pulled into
 * the chunks that actually need birthday logic (Home, Profile, ProfileCard)
 * rather than the shared initial bundle.
 */
import {Solar} from 'lunar-typescript'

export type BirthdayEntry = [string, string] | [string, string, string]

/** Precomputed "today" for solar and lunar calendars. */
export interface TodayContext {
    solarMonth: number   // 0-based (Date.getMonth())
    solarDay: number
    lunarMonth: number   // absolute value (leap-agnostic)
    lunarDay: number
}

/** Compute today's solar & lunar month-day once, then reuse across a loop. */
export function getTodayContext(): TodayContext {
    const now = new Date()
    const solar = Solar.fromDate(now)
    const lunar = solar.getLunar()
    return {
        solarMonth: now.getMonth(),
        solarDay: now.getDate(),
        lunarMonth: Math.abs(lunar.getMonth()),
        lunarDay: lunar.getDay(),
    }
}

/**
 * Check if today is someone's birthday from a birthday-list.json entry.
 *
 * Entry format: [id, bornDate] or [id, bornDate, lunarMd]
 * For lunar birthdays (lunarMd e.g. "01-27"), compare today's lunar month-day.
 * Leap months also count as a match.
 *
 * Pass a precomputed `today` when calling in a loop to avoid redundant work.
 */
export function isTodayBirthday(entry: BirthdayEntry, today?: TodayContext): boolean {
    const [, bornDate, lunarMd] = entry as [string, string, string?]
    const ctx = today ?? getTodayContext()

    if (lunarMd) {
        const [lm, ld] = lunarMd.split('-').map(Number)
        return ctx.lunarMonth === lm && ctx.lunarDay === ld
    } else {
        const d = new Date(bornDate)
        return ctx.solarDay === d.getDate() && ctx.solarMonth === d.getMonth()
    }
}
