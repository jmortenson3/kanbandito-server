CREATE TABLE tasks (
  id            SERIAL PRIMARY KEY,
  title         TEXT,
  description   TEXT,
  state         TEXT,
  assignee      TEXT [],
  folder        TEXT,
  effort_hours  INTEGER,
  created_date  TIMESTAMP,
  due_date      TIMESTAMP
);