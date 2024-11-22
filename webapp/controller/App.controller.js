sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
  ],
  function (Controller, MessageToast, JSONModel) {
    "use strict";


    return Controller.extend("test.test.controller.App", {
      //   onNavigateToDrivers: function () {
      //     this.byId("app").to(this.byId("driversPage"));
      //   },
      //   onNavigateToProducts: function () {
      //     this.byId("app").to(this.byId("productsPage"));
      //   },
      //   onNavigateToSupplier: function () {
      //     this.byId("app").to(this.byId("supplierPage"));
      //   },
      //   onNavigateToVehicle: function () {
      //     this.byId("app").to(this.byId("vehiclePage"));
      //   },
      onNavigateToProcess: function () {
        this.byId("app").to(this.byId("processPage"));
      },

      onNavigateToHome: function () {
        // Drivers Sayfası'ndan Ana Sayfa'ya geri dön
        this.byId("app").to(this.byId("homePage"));
      },

      onInit: function () {
        // var oDriversModel = new JSONModel({
        //   drivers: [],
        // });
        // this.getView().setModel(oDriversModel, "driversModel");
        // var oProductsModel = new JSONModel({
        //   products: [],
        // });
        // this.getView().setModel(oProductsModel, "productModel");
        // var oSupplierModel = new JSONModel({
        //   suppliers: [],
        // });
        // this.getView().setModel(oSupplierModel, "supplierModel");
        // var oVehicleModel = new JSONModel({
        //   vehicles: [],
        // });
        // this.getView().setModel(oVehicleModel, "vehicleModel");
        var oProcessModel = new JSONModel({
          process: [],
        });
        this.getView().setModel(oProcessModel, "processModel");
      },

      //   onFetchDrivers: function () {
      //     fetch("http://localhost:3000/drivers")
      //       .then((response) => response.json())
      //       .then((data) => {
      //         console.log("Fetched Data:", data);
      //         if (data && Array.isArray(data) && data.length > 0) {
      //           this.getView()
      //             .getModel("driversModel")
      //             .setProperty("/drivers", data);
      //           this.byId("driverList").getBinding("items").refresh();
      //           console.log(data);
      //           MessageToast.show("Veri başarıyla çekildi.");
      //         } else {
      //           MessageToast.show("Veri boş.");
      //         }
      //       })
      //       .catch((error) => {
      //         MessageToast.show("Veri çekilemedi: " + error.message);
      //       });
      //   },

      //   onEditDriver: function (oEvent) {
      //     var oSelectedItem = oEvent.getSource().getParent().getParent();
      //     var oBindingContext = oSelectedItem.getBindingContext("driversModel");
      //     var oDriverData = oBindingContext.getObject();
      //     this.byId("firstnameInput").setValue(oDriverData.firstname);
      //     this.byId("lastnameInput").setValue(oDriverData.lastname);
      //     this.byId("identityInput").setValue(oDriverData.identity);
      //     this.byId("phoneInput").setValue(oDriverData.phone);
      //     this.byId("lisenceInput").setValue(oDriverData.driving_license);

      //     this.selectedDriverId = oDriverData.id;
      //   },

      //   onUpdateDriver: function () {
      //     var oDriverData = {
      //       firstname: this.byId("firstnameInput").getValue(),
      //       lastname: this.byId("lastnameInput").getValue(),
      //       identity: this.byId("identityInput").getValue(),
      //       phone: this.byId("phoneInput").getValue(),
      //       driving_license: this.byId("lisenceInput").getValue(),
      //     };

      //     fetch(`http://localhost:3000/drivers/${this.selectedDriverId}`, {
      //       method: "PUT",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify(oDriverData),
      //     })
      //       .then((response) => response.json())
      //       .then((data) => {
      //         MessageToast.show("Sürücü başarıyla güncellendi!");
      //         this.onFetchDrivers(); // Refresh the list
      //       })
      //       .catch((error) => {
      //         MessageToast.show("Güncelleme hatası: " + error.message);
      //       });
      //   },
      //   onSaveDriverData: function () {
      //     // Kullanıcıdan verileri al
      //     const firstname = this.byId("firstnameInput").getValue();
      //     const lastname = this.byId("lastnameInput").getValue();
      //     const identity = this.byId("identityInput").getValue();
      //     const phone = this.byId("phoneInput").getValue();
      //     const driving_license = this.byId("lisenceInput").getValue();

      //     // API'ye POST isteği gönder
      //     fetch("http://localhost:3000/drivers", {
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({
      //         firstname,
      //         lastname,
      //         identity,
      //         phone,
      //         driving_license,
      //       }),
      //     })
      //       .then((response) => {
      //         if (!response.ok) {
      //           throw new Error("API error");
      //         }
      //         return response.json();
      //       })
      //       .then((data) => {
      //         MessageToast.show("Veriler başarıyla kaydedildi!");
      //         console.log("Saved data:", data);
      //       })
      //       .catch((error) => {
      //         MessageToast.show("Hata oluştu: " + error.message);
      //         console.error("Error:", error);
      //       });
      //   },

      //   onSaveProductData: function () {
      //     const product_code = this.byId("productCodeInput").getValue();
      //     const product_definition = this.byId(
      //       "productDefinitionInput"
      //     ).getValue();

      //     if (!product_code || !product_definition) {
      //       sap.m.MessageToast.show("Lütfen tüm alanları doldurun.");
      //       return;
      //     }

      //     fetch("http://localhost:3000/products", {
      //       // API URL'i
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({
      //         product_code,
      //         product_definition,
      //       }),
      //     })
      //       .then((response) => {
      //         if (!response.ok) {
      //           throw new Error("API hatası");
      //         }
      //         return response.json();
      //       })
      //       .then((data) => {
      //         sap.m.MessageToast.show("Ürün başarıyla kaydedildi!");
      //         console.log("Kaydedilen ürün:", data);
      //       })
      //       .catch((error) => {
      //         sap.m.MessageToast.show("Hata oluştu: " + error.message);
      //         console.error("Error:", error);
      //       });
      //   },
      //   onFetchProduct: function () {
      //     fetch("http://localhost:3000/products")
      //       .then((response) => response.json())
      //       .then((data) => {
      //         console.log("Fetched Data:", data);
      //         if (data && Array.isArray(data) && data.length > 0) {
      //           var oModel = this.getView().getModel("productModel");
      //           oModel.setProperty("/products", data);
      //           this.byId("productTable").getBinding("items").refresh();
      //           MessageToast.show("Veri başarıyla çekildi.");
      //         } else {
      //           MessageToast.show("Veri boş.");
      //         }
      //       })
      //       .catch((error) => {
      //         MessageToast.show("Veri çekilemedi: " + error.message);
      //       });
      //   },
      //   onSaveSupplierData: function () {
      //     const title = this.byId("supplierTitleInput").getValue();
      //     const address = this.byId(
      //       "supplierAddressInput"
      //     ).getValue();
      //     const tax_office = this.byId(
      //         "supplierTaxOfficeInput"
      //       ).getValue();
      //       const tax_number = this.byId(
      //         "supplierTaxNumberInput"
      //       ).getValue();

      //     if (!title || !address || !tax_office|| !tax_number) {
      //       sap.m.MessageToast.show("Lütfen tüm alanları doldurun.");
      //       return;
      //     }

      //     fetch("http://localhost:3000/suppliers", {
      //       // API URL'i
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({
      //         title,
      //         address,
      //         tax_office,
      //         tax_number,
      //       }),
      //     })
      //       .then((response) => {
      //         if (!response.ok) {
      //           throw new Error("API hatası");
      //         }
      //         return response.json();
      //       })
      //       .then((data) => {
      //         sap.m.MessageToast.show("tedarikçi başarıyla kaydedildi!");
      //         console.log("Kaydedilen tedarikçi:", data);
      //       })
      //       .catch((error) => {
      //         sap.m.MessageToast.show("Hata oluştu: " + error.message);
      //         console.error("Error:", error);
      //       });
      //   },
      //   onFetchSupplier: function () {
      //     fetch("http://localhost:3000/suppliers")
      //       .then((response) => response.json())
      //       .then((data) => {
      //         console.log("Fetched Data:", data);
      //         if (data && Array.isArray(data) && data.length > 0) {
      //           var oModel = this.getView().getModel("supplierModel");
      //           oModel.setProperty("/suppliers", data);
      //           this.byId("supplierTable").getBinding("items").refresh();
      //           MessageToast.show("Veri başarıyla çekildi.");
      //         } else {
      //           MessageToast.show("Veri boş.");
      //         }
      //       })
      //       .catch((error) => {
      //         MessageToast.show("Veri çekilemedi: " + error.message);
      //       });
      //   },

      //   onSaveVehicleData: function () {
      //     const license_plate = this.byId("licenseplateInput").getValue();
      //     const registration_no = this.byId(
      //       "registrationInput"
      //     ).getValue();
      //     const trailer_plate = this.byId(
      //         "trailerplateInput"
      //       ).getValue();

      //     if (!license_plate || !registration_no ) {
      //       sap.m.MessageToast.show("Lütfen tüm alanları doldurun.");
      //       return;
      //     }

      //     fetch("http://localhost:3000/vehicles", {
      //       // API URL'i
      //       method: "POST",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({
      //         license_plate,
      //         registration_no,
      //         trailer_plate,

      //       }),
      //     })
      //       .then((response) => {
      //         if (!response.ok) {
      //           throw new Error("API hatası");
      //         }
      //         return response.json();
      //       })
      //       .then((data) => {
      //         sap.m.MessageToast.show("araç başarıyla kaydedildi!");
      //         console.log("Kaydedilen araç:", data);
      //       })
      //       .catch((error) => {
      //         sap.m.MessageToast.show("Hata oluştu: " + error.message);
      //         console.error("Error:", error);
      //       });
      //   },
      //   onFetchVehicle: function () {
      //     fetch("http://localhost:3000/vehicles")
      //       .then((response) => response.json())
      //       .then((data) => {
      //         console.log("Fetched Data:", data);
      //         if (data && Array.isArray(data) && data.length > 0) {
      //           var oModel = this.getView().getModel("vehicleModel");
      //           oModel.setProperty("/vehicles", data);
      //           this.byId("vehicleTable").getBinding("items").refresh();
      //           MessageToast.show("Veri başarıyla çekildi.");
      //         } else {
      //           MessageToast.show("Veri boş.");
      //         }
      //       })
      //       .catch((error) => {
      //         MessageToast.show("Veri çekilemedi: " + error.message);
      //       });
      //   },

      onSaveProcessData: function () {
        const receipt_no = this.byId("receiptNoInput").getValue();
        const license_plate = this.byId("licenseplateInput").getValue();
        const registration_no = this.byId("registrationInput").getValue();
        const trailer_plate = this.byId("trailerplateInput").getValue();
        const firstname = this.byId("firstnameInput").getValue();
        const lastname = this.byId("lastnameInput").getValue();
        const identity = this.byId("identityInput").getValue();
        const phone = this.byId("phoneInput").getValue();
        const driving_license = this.byId("licenseInput").getValue();
        const product_code = this.byId("productCodeInput").getValue();
        const product_definition = this.byId(
          "productDefinitionInput"
        ).getValue();
        const title = this.byId("supplierTitleInput").getValue();
        const address = this.byId("supplierAddressInput").getValue();
        const tax_office = this.byId("supplierTaxOfficeInput").getValue();
        const tax_number = this.byId("supplierTaxNumberInput").getValue();
        const first_weighing = parseFloat(
          this.byId("firstweighingInput").getValue()
        );
        const last_weighing = parseFloat(
          this.byId("lastweighingInput").getValue()
        );
        const net_weighing = parseFloat(
          this.byId("netweighingInput").getValue()
        );
        const entry_date = new Date(this.byId("entryDateInput").getValue());
        const release_date = new Date(this.byId("releaseDateInput").getValue());
        const delivery_date = new Date(
          this.byId("deliveryDateInput").getValue()
        );
        const delivery_no = this.byId("deliveryNoInput").getValue();

        if (
          !receipt_no ||
          !license_plate ||
          !registration_no ||
          !trailer_plate ||
          !firstname ||
          !lastname ||
          !identity ||
          !phone ||
          !driving_license ||
          !product_code ||
          !product_definition ||
          !title ||
          !address ||
          !tax_office ||
          !tax_number ||
          !first_weighing ||
          !last_weighing ||
          !net_weighing ||
          !entry_date ||
          !release_date ||
          !delivery_date ||
          !delivery_no
        ) {
          sap.m.MessageToast.show("Lütfen tüm alanları doldurun.");
          return;
        }

        fetch("http://localhost:3000/process", {
          // API URL'i
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            receipt_no,
            license_plate,
            registration_no,
            trailer_plate,
            firstname,
            lastname,
            identity,
            phone,
            driving_license,
            product_code,
            product_definition,
            title,
            address,
            tax_office,
            tax_number,
            first_weighing,
            last_weighing,
            net_weighing,
            entry_date,
            release_date,
            delivery_date,
            delivery_no,
          }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("API hatası");
            }
            return response.json();
          })
          .then((data) => {
            sap.m.MessageToast.show("data başarıyla kaydedildi!");
            console.log("Kaydedilen data:", data);
          })
          .catch((error) => {
            sap.m.MessageToast.show("Hata oluştu: " + error.message);
            console.error("Error:", error);
          });
      },
      //   onFetchProcess: function () {
      //     fetch("http://localhost:3000/process")
      //       .then((response) => response.json())
      //       .then((data) => {
      //         console.log("Fetched Data:", data);
      //         if (data && Array.isArray(data) && data.length > 0) {
      //           var oModel = this.getView().getModel("processModel");
      //           oModel.setProperty("/process", data);
      //           this.byId("processTable").getBinding("items").refresh();
      //           MessageToast.show("Veri başarıyla çekildi.");
      //         } else {
      //           MessageToast.show("Veri boş.");
      //         }
      //       })
      //       .catch((error) => {
      //         MessageToast.show("Veri çekilemedi: " + error.message);
      //       });
      //   },

      onFetchProcess: function () {
        fetch("http://localhost:3000/process")
          .then((response) => response.json())
          .then((data) => {
            console.log("Fetched Data:", data);
            if (data && Array.isArray(data) && data.length > 0) {
              var oModel = new sap.ui.model.json.JSONModel();
              oModel.setData({ process: data });
              this.getView().setModel(oModel, "processModel");

              this.byId("processTable").bindItems({
                path: "processModel>/process",
                template: new sap.m.ColumnListItem({
                  cells: [
                    new sap.m.Input({
                      value: "{processModel>receipt_no}",
                      editable: true,
                    }),
                    new sap.m.Input({
                      value: "{processModel>license_plate}",
                      editable: true,
                    }),
                    new sap.m.Input({
                      value: "{processModel>registration_no}",
                      editable: true,
                    }),
                    new sap.m.Input({
                      value: "{processModel>trailer_plate}",
                      editable: true,
                    }),
                    new sap.m.Input({
                      value: "{processModel>firstname}",
                      editable: true,
                    }),
                    new sap.m.Input({
                      value: "{processModel>lastname}",
                      editable: true,
                    }),
                    new sap.m.Input({
                      value: "{processModel>title}",
                      editable: true,
                    }),
                    new sap.m.Input({
                      value: "{processModel>address}",
                      editable: true,
                    }),
                    new sap.m.Input({
                      value: "{processModel>product_code}",
                      editable: true,
                    }),
                    new sap.m.Input({
                      value: "{processModel>first_weighing}",
                      editable: true,
                    }),
                    new sap.m.Input({
                      value: "{processModel>last_weighing}",
                      editable: true,
                    }),
                    new sap.m.Input({
                      value: "{processModel>net_weighing}",
                      editable: true,
                    }),
                    new sap.m.Input({
                      value: "{processModel>entry_date}",
                      editable: true,
                    }),
                    new sap.m.Input({
                      value: "{processModel>release_date}",
                      editable: true,
                    }),
                    new sap.m.Input({
                      value: "{processModel>delivery_date}",
                      editable: true,
                    }),
                    new sap.m.Input({
                      value: "{processModel>delivery_no}",
                      editable: true,
                    }),
                  ],
                }),
              });

              MessageToast.show("Veri başarıyla çekildi.");
            } else {
              MessageToast.show("Veri boş.");
            }
          })
          .catch((error) => {
            MessageToast.show("Veri çekilemedi: " + error.message);
          });
      },
      onSaveProcessEditData: function () {
        var oTable = this.byId("processTable");
        var aItems = oTable.getItems();
      
        // Tablodaki tüm satırlara bakıyoruz
        aItems.forEach(function (oItem) {
          var oBindingContext = oItem.getBindingContext("processModel");
          var oData = oBindingContext.getObject();
      
          // Güncellenmiş veriyi backend'e gönderiyoruz
          fetch(`http://localhost:3000/process/${oData.id}`, {
            method: "PUT",  // veya "PATCH"
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(oData),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("API hatası");
              }
              return response.json();
            })
            .then((data) => {
              sap.m.MessageToast.show("Veri başarıyla güncellendi!");
            })
            .catch((error) => {
              sap.m.MessageToast.show("Hata oluştu: " + error.message);
              console.error("Error:", error);
            });
        });
      },
      onFilterData: function () {
        var title = this.byId("supplierFilterInput").getValue();
        var license_plate = this.byId("licensePlateFilterInput").getValue();
        var startDate = this.byId("startDateInput").getDateValue();
        var endDate = this.byId("endDateInput").getDateValue();
      
        var aFilters = [];
      
        if (title) {
          aFilters.push(new sap.ui.model.Filter("title", sap.ui.model.FilterOperator.Contains, title));
        }
      
        if (license_plate) {
          aFilters.push(new sap.ui.model.Filter("license_plate", sap.ui.model.FilterOperator.Contains, license_plate));
        }
      
        if (startDate && endDate) {
          var startDateFilter = new sap.ui.model.Filter("entry_date", sap.ui.model.FilterOperator.GE, startDate);
          var endDateFilter = new sap.ui.model.Filter("entry_date", sap.ui.model.FilterOperator.LE, endDate);
          aFilters.push(startDateFilter, endDateFilter);
        } else if (startDate) {
          aFilters.push(new sap.ui.model.Filter("entry_date", sap.ui.model.FilterOperator.GE, startDate));
        } else if (endDate) {
          aFilters.push(new sap.ui.model.Filter("entry_date", sap.ui.model.FilterOperator.LE, endDate));
        }
      
        var oTable = this.byId("processTable");
        var oBinding = oTable.getBinding("items");
        oBinding.filter(aFilters);

        console.log(oBinding);
      },
      onExportToExcel: function () {
        var oModel = this.getView().getModel("processModel");
        var aData = oModel.getProperty("/process");
    
        var oExport = new sap.ui.export.Export({
            exportType: new sap.ui.export.ExportTypeCSV({
                separatorChar: ";" 
            }),
            models: oModel, 
            rows: {
                path: "/process" 
            },
            columns: [
                { label: "Fiş No", template: { content: "{processModel>receipt_no}" } },
                { label: "Araç Plakası", template: { content: "{processModel>license_plate}" } },
                { label: "Tescil Numarası", template: { content: "{processModel>registration_no}" } },
                { label: "Dorse Plakası", template: { content: "{processModel>trailer_plate}" } },
                { label: "Tedarikçi Adı", template: { content: "{processModel>title}" } },
                { label: "İlk Tartım", template: { content: "{processModel>first_weighing}" } },
                { label: "Son Tartım", template: { content: "{processModel>last_weighing}" } },
                { label: "Net Tartım", template: { content: "{processModel>net_weighing}" } },
                { label: "Giriş Tarihi", template: { content: "{processModel>entry_date}" } },
                { label: "Çıkış Tarihi", template: { content: "{processModel>release_date}" } },
                { label: "Teslim Tarihi", template: { content: "{processModel>delivery_date}" } },
                { label: "Teslimat Numarası", template: { content: "{processModel>delivery_no}" } }
            ]
        });
    
        oExport.saveFile().catch(function (oError) {
            console.error("Export failed:", oError);
        });
    }
    
      
      
    });
  }
);
