import { NgTemplateOutlet } from "@angular/common";
import { AfterViewInit, Component, ElementRef, HostBinding, TemplateRef, ViewChild } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, NgTemplateOutlet],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit{
  myContext = {$implicit: 'World1', localSk: 'Svet'};
  name: string = 'Sai Kumar Desu';
  inputFocus: boolean = false;
  @ViewChild('element', { static: true }) element!: ElementRef;

   ngAfterViewInit() {
      console.log(this.element.nativeElement.value);
   }
  @HostBinding('class.focus')
  get focus() {
    console.log(this.inputFocus);
    return this.inputFocus;
  }

}
