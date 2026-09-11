import assert from 'node:assert/strict';
import { eventCalendarDate, eventDateTime, eventSortTime, eventHasNotEnded, formatEventDate } from '../src/lib/event-dates.ts';

const historical = { dateOnly: '2026-03-30' };
assert.equal(eventDateTime(historical), '2026-03-30');
assert.equal(formatEventDate(historical, 'en', true), '30 March 2026');
assert.equal(formatEventDate(historical, 'zh', true), '2026年3月30日');
assert.equal(eventHasNotEnded(historical, new Date('2026-03-30T21:59:59Z')), true);
assert.equal(eventHasNotEnded(historical, new Date('2026-03-30T22:00:00Z')), false);
assert.equal(eventHasNotEnded({ dateOnly: '2026-10-25' }, new Date('2026-10-25T22:59:59Z')), true);
assert.equal(eventHasNotEnded({ dateOnly: '2026-10-25' }, new Date('2026-10-25T23:00:00Z')), false);
assert.equal(eventHasNotEnded({ ...historical, endDateOnly: '2026-04-01' }, new Date('2026-03-31T12:00Z')), true);
const timed = { date: new Date('2026-03-30T16:00:00Z'), endDate: new Date('2026-03-30T18:00:00Z') };
assert.equal(eventHasNotEnded(timed, new Date('2026-03-30T17:00Z')), true);
assert.equal(eventHasNotEnded(timed, new Date('2026-03-30T18:00:01Z')), false);
assert.match(formatEventDate(timed, 'en', true), /18:00.*20:00/);
assert.equal(eventCalendarDate({ date: new Date('2026-03-29T22:30Z') }), '2026-03-30');
assert.deepEqual([{ dateOnly: '2025-11-16' }, timed, historical].sort((a,b) => eventSortTime(b)-eventSortTime(a)), [timed, historical, { dateOnly: '2025-11-16' }]);
console.log('Event dates: 13 assertions passed (calendar dates, timed events, Brussels day boundaries and DST).');
