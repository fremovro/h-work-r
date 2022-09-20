import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('book', { path: '/books' });
  this.route('edit-book', { path: '/edit-book/:id' });
  this.route('add-book', { path: '/add-book' });
  this.route('speaker', { path: '/speakers' });
  this.route('add-speaker', { path: '/add-speaker' });
  this.route('edit-speaker', { path: '/edit-speaker/:id' });
  this.route('404', { path: '*path' });
  this.route('meeting', { path: '/meetings' });
  this.route('edit-meeting', { path: '/edit-meeting/:id' });
  this.route('edit-lecture', { path: '/edit-lecture/:id' });
  this.route('add-lecture', { path: '/add-lecture/:id' });
  this.route('add-meeting', { path: '/add-meeting/:id' });
  this.route('add-meeting-lecture', { path: '/add-meeting-lecture/:id' })
  this.route('register', { path: '/register' });
  this.route('login', { path: '/login' });
  this.route('edit-meeting-lecture', { path: '/edit-meeting-lecture/:id'});
});

export default Router;
