({
    handleMessage : function(component, message) {
        if(message!=null && message.getParam("lmsData").value !=null){
            component.set("v.messageReceived",message.getParam("lmsData").value)
        }
    },
    inputHandler : function(component,event){
        console.log(event.target.value)
        component.set("v.messageValue",event.target.value)
    },
    publishHandler : function(component,event){
        let message = {
            lmsData : {
                value : component.get("v.messageValue")
            }
        }
        component.find("SampleMessageChannel").publish(message)
    }
})
