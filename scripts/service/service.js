let valueArr = [];

submitButton.onclick = function values(){
    let fullName = document.getElementById('full-name').value;
    let phoneNumber = document.getElementById('contact').value;
    let date = document.getElementById('date').value;
    let serviceType = document.getElementById('serviceType').value;
    let manuName = document.getElementById('manufacturer').value;
    let modelName = document.getElementById('model').value;
    let specifics = document.getElementById('specifics').value;
    let checkBox = document.getElementById('agree-box').value;
    
    valueObj = {
        name: fullName,
        contact: phoneNumber,
        serviceDate: date,
        serviceType: serviceType,
        manufacturer: manuName,
        model: modelName,
        specificNotes: specifics,
        confirmDetails: checkBox,
    };

    valueArr.push(valueObj);

    console.log(valueArr);

}