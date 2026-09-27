import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Sidebar} from '../sidebar/sidebar';
import {Navbar} from '../navbar/navbar';

@Component({
  imports: [RouterOutlet,Sidebar,Navbar],
  selector: 'app-main-layout',
  styleUrl: './main-layout.scss',
  templateUrl: './main-layout.html',
})
export class MainLayout {}
