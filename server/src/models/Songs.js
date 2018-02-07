module.exports = (sequelize, DataTypes) => {
  const Songs = sequelize.define('Songs', {
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    genre: DataTypes.STRING,
    album: DataTypes.STRING,
    albumImageUrl: DataTypes.STRING,
    youtubeId: DataTypes.STRING, // STRING 255 CHAR LIMIT
    lyrics: DataTypes.TEXT, // TEXT ALOT OF CHARS
    tab: DataTypes.TEXT
  })
  return Songs
}
