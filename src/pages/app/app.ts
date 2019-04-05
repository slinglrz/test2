import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController } from 'ionic-angular';
import { CalculatorPage } from '../calculator/calculator';
import { CalendarPage } from '../calendar/calendar';
/**
 * Generated class for the AppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-app',
  templateUrl: 'app.html',
})
export class AppPage {
  select = "select2";
  ionViewDidLoad() {
    console.log('ionViewDidLoad AppPage');
  }
  constructor(public navCtrl: NavController, public navParams: NavParams , private alertCrt:AlertController) {
  }

  goAlert(){
    let Alert = this.alertCrt.create({
      title: 'complete',
      message: 'บันทึกข้อมูลสำเร็จ',
      buttons: ['OK']
    });
    Alert.present();
  }

  goCalculatorPage() {
    this.navCtrl.push(CalculatorPage)
  }

  goCalendarPage() {
    this.navCtrl.push(CalendarPage)
  }



}
