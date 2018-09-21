import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



	posts=[
		{
		  title: 'Mon premier post',
		  content: 'le premier contenu, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		  loveIts: -1,
		  created_at: Date()
		},

		{
		  title: 'Mon second post',
		  content: 'le premier contenu, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		  loveIts: 3,
		  created_at: Date()
		},

		{
		  title: 'Encore un post',
		  content: 'le premier contenu, Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		  loveIts: 0,
		  created_at: Date()
		}    
	];


  titre = 'blog';
}
