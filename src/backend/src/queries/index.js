// All the queries here (meassurement, right now is a special case)

sensor = {
  create:        'INSERT INTO sensor (type, auth_id) VALUES ($1, $2) RETURNING id',
  delete:        'DELETE FROM sensor WHERE id = $1',
  update:        'UPDATE sensor SET type = $1, auth_id = $2 WHERE id = $3',
  read:          'SELECT * FROM sensor WHERE 1=1 ORDER BY id OFFSET $1 LIMIT $2',
  readUnlimited: 'SELECT * FROM sensor WHERE 1=1 ORDER BY id',
  getById:       'SELECT * FROM sensor WHERE id = $1',
}

util = {
  count: 'SELECT COUNT(*) FROM sensor',
}

meassurement = {
  pukka: 'SELECT * FROM sensor WHERE auth_id = $1 AND id = $2',
}

module.exports = {
  sensor,
  util,
  meassurement,
}
