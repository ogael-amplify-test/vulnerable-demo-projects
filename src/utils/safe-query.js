// Parameterized query helper — avoids string-concatenated SQL (fixes SQLi).
function safeQuery(db, sql, params) {
  return db.prepare(sql).all(...params);
}

module.exports = { safeQuery };
