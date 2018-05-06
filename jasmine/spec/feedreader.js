/** feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/** We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
  /**
   * This suite is all about the RSS feeds definitions,
   * the allFeeds variable in our application.
   */
  describe('RSS Feeds', function () {

    /** Tests to make sure that the allFeeds variable has been
     *  defined and that it is not empty.
     */
    it('feeds are defined', function () {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /** Tests each feed in the allFeeds object and ensures it has
     * a URL defined, and that the URL is a string and is not empty.
     */
    it('feed has not empty URL', function () {
      allFeeds.forEach(function (feed) {
        expect(feed.url).toBeDefined();
        expect(typeof feed.url).toBe('string');
        expect(feed.url).not.toBe('');
      });
    });

    /** Tests each feed in the allFeeds object and ensures it has
     * a name defined, and that the name is a string and is not empty.
     */
    it('feed has not empty name', function () {
      allFeeds.forEach(function (feed) {
        expect(feed.name).toBeDefined();
        expect(typeof feed.name).toBe('string');
        expect(feed.name).not.toBe('');
      });
    });
  });


  /** This suite is about testing the menu. */
  describe('The menu', function () {
    var menuHidden;

    beforeEach(function () {
      menuHidden = document.querySelector('body');
    });

    /** Tests that ensures the menu element is hidden by default. */
    it('menu is hidden', function () {
      expect(menuHidden.classList.contains('menu-hidden')).toBe(true);
    });

    /** Test that ensures the menu changes visibility
     *  when the menu icon is clicked
     */
    it('the menu visibility changes', function () {
      var menuIcon = document.querySelector('.menu-icon-link');

      menuIcon.click();
      expect(menuHidden.classList.contains('menu-hidden')).not.toBe(true);

      menuIcon.click();
      expect(menuHidden.classList.contains('menu-hidden')).toBe(true);
    });
  });


  /**
   * This suite is about loading initial entries. It ensures that
   * when the loadFeed function is called and completes its work,
   * there is at least a single .entry element within the .feed container.
   */
  describe('Initial Entries', function () {

    var feedContainer = document.querySelector('.feed');
    var index = 0;
    var entries;

    beforeEach(function (done) {
      loadFeed(index, function () {
        done();
      });
    });

    it('.feed should have at least a single entry', function (done) {
      entries = feedContainer.querySelectorAll('.entry');
      expect(entries.length).toBeGreaterThan(0);
      done();
    });
  });

  /**
   * This suite is about changingc content. It ensures that
   * when a new feed is loadedby the loadFeed function that
   * the content actually changes.
   */
  describe('New Feed Selection', function () {
    var feedContainer = document.querySelector('.feed');
    var index = 0;
    var firstFeedsLoad,
      secondFeedsLoad;

    beforeEach(function (done) {
      loadFeed(index, function () {
        firstFeedsLoad = feedContainer.innerHTML;
        index++;
        loadFeed(index, function () {
          secondFeedsLoad = feedContainer.innerHTML;
          done();
        });
      });
    });

    it('.feed content changes when new feed is loaded', function (done) {
      expect(firstFeedsLoad).not.toEqual(secondFeedsLoad);
      done();
    });
  });
}());
