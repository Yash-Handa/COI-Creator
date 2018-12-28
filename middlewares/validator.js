/* eslint-disable max-len */

module.exports = (req, res, next) => {
  const b = req.body;

  if (b.toggler === 'Part') {
    const somePart = b.part_number && b.part_name && b.art_number && b.art_name && b.clause_number && b.sub_clause_number && b.sub_clause;

    const noSchedule = !(b.schedule_number || b.schedule_detail || b.schedule_name || b.articles || b.schedule_note);

    if (noSchedule && somePart) {
      // proceed to mongoose validation to save a part, art, clause or sub-clause
    } else {
      next(new Error(`given parameters for the Part are not complete: noSchedule: ${noSchedule}, somePart: ${somePart}`));
    }
  } else if (b.toggler === 'Schedule') {
    const noPart = !(b.part_number || b.part_name || b.art_number || b.art_name || b.clause_number || b.sub_clause_number || b.sub_clause || b.part_note || b.art_note || b.clause_note || b.sub_clause_note);

    const someSchedule = b.schedule_number && b.schedule_detail && b.schedule_name && b.articles;

    if (someSchedule && noPart) {
      // proceed to mongoose validation to save a schedule
    } else {
      next(new Error(`given parameters for the Schedule are not complete: someSchedule: ${someSchedule}, noPart: ${noPart}`));
    }
  } else next(new Error(`Toggle value is ${b.toggler}`));
};
