module.exports = (req, res, next) => {
  const b = req.body;
  const form = {
    title: 'COI-Form',
    schedule_number: b.schedule_number,
    schedule_name: b.schedule_name,
    schedule_detail: b.schedule_detail,
    schedule_note: b.schedule_note,
    articles: b.articles,
    part_number: b.part_number,
    part_name: b.part_name,
    part_note: b.part_note,
    art_number: b.art_number,
    art_name: b.art_name,
    art_note: b.art_note,
    clause_number: b.clause_number,
    clause_note: b.clause_note,
    sub_clause_number: b.sub_clause_number,
    sub_clause_note: b.sub_clause_note,
    sub_clause: b.sub_clause,
  };

  if (b.toggler === 'Part') {
    form.checker = 'checked';
  } else {
    form.checker = '';
  }

  // attaching form to the response object which will be send to the client again
  res.locals.form = form;
  next();
};
