const app = new Vue({
    el: '#app',
    data: {
        categories: [ 'Chairman', 'Engineer', 'Secretary'  ],
        position: null,
        identityCard:"",
        employeeName:"",
        hoursWorked:"",
        infoUsers: [],
        errors: false

    },
    methods: {
        validatePositionPrice(){
            if(this.position == 'Chairman') {
                return 25000
            } else if(this.position == 'Engineer') {
                return 20000
            }else {
                return 10000
            }

        },
        
        addDataUser(){
        //      if(this.identityCard === "" || this.identityCard < 1)
        //      {
        //          this.errors.errorCardNumber = true

        //      } if(this.employeeName === "" ){

        //          this.errors.errorFullName = true

        //      } if(this.hoursWorked < 10 || this.hoursWorked > 100) {

        //          this.errors.errorHours = true

        //      } if(this.position === null) {

        //          this.errors.errorSelectPosition = true
        // }
          
             if(this.identityCard === "" || this.identityCard < 1 || this.employeeName === "" || typeof this.employeeName !== 'string' || this.hoursWorked < 10 || this.hoursWorked > 100 || this.position === null) {
    
                    this.errors = true
                    console.log('error');
    
                 }
            else{
                console.log('Everything OK')
                this.infoUsers.push({
                    cardNumber: this.identityCard,
                    name: this.employeeName,
                    hours: this.hoursWorked,
                    position: this.position,
                    price: this.validatePositionPrice()
                    
                })

            this.identityCard= "",
            this.employeeName= "",
            this.hoursWorked= "",
            this.position = null,
            this.errors = null
            }
            
        },
        deleteUser(){

            this.infoUsers.splice(this.index, 1);
              
        },
        getIndex(evt) {
            this.index = evt.target.selectedIndex;
            
          }
    }    
  })