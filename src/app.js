import { createApp } from "../node_modules/petite-vue/dist/petite-vue.es.js"

function StepsIndicatorComponent(props){
	return {
		stepsCount: props.stepsCount,
		get stepsCountWithSuccessPage(){
            return this.stepsCount + 1
		}
	}
}

//creating a JS object for all of the details of the form fields
//This makes it easier to view/add/change areas of the form
createApp(                
	{
		//Components - registering the function with the Vue application
		StepsIndicatorComponent,

		//Data
		currentStep: 0,

		fields: {
			name: {
				label: "Name",
				value: "",
			},
			email: {
				label: "Email",
				value: "",
			},  
			address: {
				label: "Address",
				value: "",
			},
			city: {
				label: "City",
				value: "",
			},
			postcode: {
				label: "Postcode",
				value: "",
			},
			donation: {
				label: "Donation",
				placeholder: "amount",
				value: "",
			}
		},
		steps: [
				["name", "email"],
				["address", "city", "postcode"],
				["donation"]
			],

			previousStep(){
				if(this.isFirstStep) return;
				this.currentStep--;
			},
			nextStep(){
				if(this.isLastStep) return;
				this.currentStep++;
			},
			//get is 
			get totalSteps(){
				return this.steps.length
			},
			get isFirstStep(){
				return this.currentStep === 0;
			},
			get isLastStep(){
				return this.currentStep === this.totalSteps - 1;
			},
	}
).mount("#multi-step-form");