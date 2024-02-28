import { Component } from "@angular/core";


//decorator
@Component({

    selector: 'app-test',

    template: '<h1 class="test">This is my test component</h1>',

    styles: [ '.test{ color: red}'],
    

})
//class

export class TestComponent{

}


