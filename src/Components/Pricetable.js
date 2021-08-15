import React from 'react'
const Price = (props) => {
  return (<div>
    <section class="pricing py-5">
    <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
              <div class="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">{props.productdata.name}</h5>
                <h6 class="card-price text-center">${props.productdata.amount}<span class="period">/month</span></h6>
                <hr></hr>
                <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.productdata.li1}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.productdata.li2}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.productdata.li3}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.productdata.li4}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.productdata.li5}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.productdata.li6}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.productdata.li7}
              </li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.productdata.li8}</li>
            </ul>
              </div>
            </div>
          </div>
          </div>
          </div>
          </section>
        </div>
            
);
}

export default Price;