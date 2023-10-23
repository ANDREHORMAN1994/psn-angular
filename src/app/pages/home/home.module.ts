import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/components/card/card.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { LabelComponent } from 'src/app/components/card/label/label.component';
import { PriceComponent } from 'src/app/components/card/price/price.component';

@NgModule({
	declarations: [CardComponent, MenuComponent, LabelComponent, PriceComponent],
	exports: [CardComponent, MenuComponent, LabelComponent, PriceComponent],
	imports: [CommonModule],
})
export class HomeModule {}
