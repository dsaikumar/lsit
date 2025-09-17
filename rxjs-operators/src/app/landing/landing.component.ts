import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  imports: [CommonModule],
  standalone: true,
})
export class LandingComponent{

  title = 'rxjs-operators';
}
