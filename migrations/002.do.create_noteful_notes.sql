CREATE TABLE noteful_notes (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  name TEXT NOT NULL,
  modified TIMESTAMPTZ NOT NULL DEFAULT now(),
  folderId INTEGER REFERENCES noteful_folders(id) ON DELETE NOT NULL,
  content TEXT NOT NULL
);