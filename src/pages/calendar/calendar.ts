import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController } from 'ionic-angular';
import { AppPage } from '../app/app';
import { CalculatorPage } from '../calculator/calculator';
/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  constructor(public navCtrl: NavController, private alertController:AlertController) {
  }
  goAlert(){
  let Alert = this.alertController.create({
      title: 'Alert',
      message: 'ต้นไม้จะโตขึ้นเมื่อมีเงินเก็บสะสมได้มากพอ',
      buttons: ['OK']
    });
    Alert.present();
  }

  goAppPage() {
    this.navCtrl.push(AppPage);
  }

  goCalculatorPage() {
    this.navCtrl.push(CalculatorPage);
  }

}
