sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast,JSONModel) {
  "use strict";

  return Controller.extend("test.test.controller.App", {

    onNavigateToDrivers: function () {
        this.byId("app").to(this.byId("driversPage"))
    },
    onNavigateToProducts: function () {
      this.byId("app").to(this.byId("productsPage"))
  },

    onNavigateToHome: function () {
      // Drivers Sayfası'ndan Ana Sayfa'ya geri dön
      this.byId("app").to(this.byId("homePage"))
    },

    onInit: function () {
      
      var oDriversModel = new JSONModel({
          drivers: [] 
      });
      this.getView().setModel(oDriversModel, "driversModel"); 
      var oProductsModel = new JSONModel({
          products: []  
      });
      this.getView().setModel(oProductsModel, "productModel");
  },
 
  
  onFetchDrivers: function () {
    fetch("http://localhost:3000/drivers")  
        .then(response => response.json())
        .then(data => {
            console.log("Fetched Data:", data);  
            if (data  && Array.isArray(data) && data.length > 0) {
                this.getView().getModel("driversModel").setProperty("/drivers", data);
                this.byId("driverList").getBinding("items").refresh(); 
                console.log(data);
                MessageToast.show("Veri başarıyla çekildi.");
            } else {
                MessageToast.show("Veri boş.");
            }
        })
        .catch(error => {
            MessageToast.show("Veri çekilemedi: " + error.message);
        });
},

onEditDriver: function (oEvent) {
  var oSelectedItem = oEvent.getSource().getParent().getParent(); 
  var oBindingContext = oSelectedItem.getBindingContext("driversModel");
  var oDriverData = oBindingContext.getObject(); 
  this.byId("firstnameInput").setValue(oDriverData.firstname);
  this.byId("lastnameInput").setValue(oDriverData.lastname);
  this.byId("identityInput").setValue(oDriverData.identity);
  this.byId("phoneInput").setValue(oDriverData.phone);
  this.byId("lisenceInput").setValue(oDriverData.driving_license);

  this.selectedDriverId = oDriverData.id;
},

onUpdateDriver: function () {
  var oDriverData = {
      firstname: this.byId("firstnameInput").getValue(),
      lastname: this.byId("lastnameInput").getValue(),
      identity: this.byId("identityInput").getValue(),
      phone: this.byId("phoneInput").getValue(),
      driving_license: this.byId("lisenceInput").getValue()
  };

  fetch(`http://localhost:3000/drivers/${this.selectedDriverId}`, {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(oDriverData)
  })
  .then(response => response.json())
  .then(data => {
      MessageToast.show("Sürücü başarıyla güncellendi!");
      this.onFetchDrivers(); // Refresh the list
  })
  .catch(error => {
      MessageToast.show("Güncelleme hatası: " + error.message);
  });
},
      onSaveDriverData: function () {
          // Kullanıcıdan verileri al
          const firstname = this.byId("firstnameInput").getValue();
          const lastname = this.byId("lastnameInput").getValue();
          const identity = this.byId("identityInput").getValue();
          const phone = this.byId("phoneInput").getValue();
          const driving_license = this.byId("lisenceInput").getValue();

          
          // API'ye POST isteği gönder
          fetch("http://localhost:3000/drivers", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify({
                  firstname,
                  lastname,
                  identity,
                  phone,
                  driving_license
              })
          })
          .then(response => {
              if (!response.ok) {
                  throw new Error("API error");
              }
              return response.json();
          })
          .then(data => {
              MessageToast.show("Veriler başarıyla kaydedildi!");
              console.log("Saved data:", data);
          })
          .catch(error => {
              MessageToast.show("Hata oluştu: " + error.message);
              console.error("Error:", error);
          });
      },

      onSaveProductData: function () {
        const product_code = this.byId("productCodeInput").getValue();
        const product_definition = this.byId("productDefinitionInput").getValue();
    
        if (!product_code || !product_definition) {
            sap.m.MessageToast.show("Lütfen tüm alanları doldurun.");
            return;
        }
    
        fetch("http://localhost:3000/products", { // API URL'i
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              product_code,
              product_definition
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("API hatası");
            }
            return response.json();
        })
        .then(data => {
            sap.m.MessageToast.show("Ürün başarıyla kaydedildi!");
            console.log("Kaydedilen ürün:", data);
        })
        .catch(error => {
            sap.m.MessageToast.show("Hata oluştu: " + error.message);
            console.error("Error:", error);
        });
    },
    onFetchProduct: function () {
      fetch("http://localhost:3000/products")
          .then(response => response.json())
          .then(data => {
              console.log("Fetched Data:", data);
              if (data && Array.isArray(data) && data.length > 0) {
                  
                  var oModel = this.getView().getModel("productModel");
                  oModel.setProperty("/products", data); 
                  this.byId("productTable").getBinding("items").refresh();
                  MessageToast.show("Veri başarıyla çekildi.");
              } else {
                  MessageToast.show("Veri boş.");
              }
          })
          .catch(error => {
              MessageToast.show("Veri çekilemedi: " + error.message);
          });
    }
    
  });
});
