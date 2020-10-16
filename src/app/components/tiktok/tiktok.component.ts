import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tiktok',
  templateUrl: './tiktok.component.html',
  styleUrls: ['./tiktok.component.css']
})
export class TiktokComponent implements OnInit {

  resourceId;
  url;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.resourceId = params['id'];
      this.url = params['url'];
    });

    let tiktok = document.getElementsByClassName('tiktok-embed')[0];
    tiktok.setAttribute('cite', this.url);
    tiktok.setAttribute('data-video-id', this.resourceId);
  }

}
