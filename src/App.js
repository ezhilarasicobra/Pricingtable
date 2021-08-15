import "./App.css";
import Card from "./Components/Card";
function App() {
  let details = [
    {
      packageName: "FREE",
      Price: 0,
      features: [
        { name: "Single User", isEnabled: true },
        { name: "5GB Storage", isEnabled: true },
        { name: "Unlimited Public Projects", isEnabled: true },
        { name: "Community Access", isEnabled: true },
        { name: "Unlimited Private Projects", isEnabled: false },
        { name: "Dedicated Phone Support", isEnabled: false },
        { name: "Free Subdomain", isEnabled: false },
        { name: "Monthly Status Reports", isEnabled: false },
      ],
    },
    {
      packageName: "PLUS",
      Price: 9,
      features: [
        { name: "5 Users", isEnabled: true ,isBold:true},
        { name: "50 GB Storage", isEnabled: true },
        { name: "Unlimited Public Projects", isEnabled: true },
        { name: "Community Access", isEnabled: true },
        { name: "Unlimited Private Projects", isEnabled: true },
        { name: "Dedicated Phone Support", isEnabled: true },
        { name: "Free Subdomain", isEnabled: true },
        { name: "Monthly Status Reports", isEnabled: false },
      ],
    },
    {
      packageName: "PRO",
      Price: 49,
      features: [
        { name: "Unlimited Users", isEnabled: true ,isBold:true},
        { name: "150 GB Storage", isEnabled: true },
        { name: "Unlimited Public Projects", isEnabled: true },
        { name: "Community Access", isEnabled: true },
        { name: "Unlimited Private Projects", isEnabled: true },
        { name: "Dedicated Phone Support", isEnabled: true },
        { name: "Unlimited Free Subdomain", isEnabled: true },
        { name: "Monthly Status Reports", isEnabled: true },
      ],
    }
  ];
  let onClick=(plan)=>{
    alert(`Hey ${plan} plan is subscribed`)
  }
  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          {
            details.map((card)=>{
return <Card data={card} onSubmit={onClick}></Card>
            })
          }
        </div>
      </div>
    </section>
  );
}

export default App;
