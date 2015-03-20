Router.route('/', function () {
  this.render('hello');
});
Router.route('/home', function () {
  this.render('hello');
});
Router.route('/us', function () {
  this.render('us');
});
Router.route('/forum', function () {
  this.render('gadfly');
});
Router.route('/contact', function () {
  this.render('contact');
});
Router.configure({
  layoutTemplate: 'layout'
});