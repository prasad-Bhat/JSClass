class Customer
{
     constructor(givenName,address)
     {
          this.givenName = givenName
          this.address = address
     }
}

class Order extends Customer
{
     constructor(givenName,address,date,myStatus,custList)
     {
          super(givenName,address)
          this.date = date
          this.status = myStatus
          this.custList = custList
          this.custLen = custList.length
     }

     createObj()
     {
          this.custList.push(this)
          console.log(custList)
     }

     getOrderDetails()
     {
          console.log(this)
     }
}

const custList = []

custObj = new Customer("prasad","kumta")

ordObj = new Order("Ram","Udupi","3/6/2009","Dispatched",custList)
ordObj = new Order("Ram","Udupi","3/6/2009","Dispatched",custList)

ordObj.getOrderDetails()

ordObj.createObj()