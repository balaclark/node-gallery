var assert = require('assert'),
gallery = require('../gallery.js');

require('colors')

/*
 * Test the Gallery module
 */
var galleryParams = {static: 'test', directory: '/photos', name: 'Test Gallery'};
console.log('[gallery] Starting gallery tests'.yellow);
gallery.init(galleryParams, function(err, album){
  assert.ok(!err);
  assert.equal(album.name, galleryParams.name);
  assert.equal(album.albums.length, 1); // OK with empty directories being excluded - bit lazy..
  assert.equal(album.photos.length, 1);
  assert.equal(album.albums[0].photos.length, 1);
  assert.ok(album.thumb);
  console.log('[gallery] Pass ✓'.green);

  var req = {
    photo: 'lake.jpg',
    album: 'album1'
  };

  console.log('[gallery.getPhoto()] Starting gallery tests'.yellow);
  gallery.getPhoto(req, function(err, photo){
    assert.ok(!err);
    console.log('[gallery.getPhoto()] Pass ✓'.green);
  });

});
