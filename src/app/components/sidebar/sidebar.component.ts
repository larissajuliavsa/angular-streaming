import { Component, OnInit } from '@angular/core';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  iconHome = faHome
  iconSearch = faSearch
  iconArtist = faGuitar
  iconPlaylist = faMusic
  menuSelected = 'Home'

  constructor() {}

  ngOnInit(): void {

  }

  handleClick(button: string) {
    this.menuSelected = button
  }
}
