import { Component } from '@angular/core';

//import pages
import { SocialPage } from '../social/social';
import { NewsPage } from '../news/news';
import { MatchesPage } from '../matches/matches';
import { FavoritesPage } from '../favorites/favorites';

@Component({
    templateUrl: 'tabs.html'
})

export class TabsPage {

    tab1Root: any = SocialPage;
    tab2Root: any = NewsPage;
    tab3Root: any = MatchesPage;
    tab4Root: any = FavoritesPage;

    constructor() {

    }
}