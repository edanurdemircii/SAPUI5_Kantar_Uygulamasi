sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  function (Controller, MessageToast, JSONModel) {
    "use strict";

    return Controller.extend("test.test.controller.App", {
      onNavigateToProcess: function () {
        this.byId("app").to(this.byId("processPage"));
      },

      onNavigateToHome: function () {
        this.byId("app").to(this.byId("homePage"));
      },

      onInit: function () {
        var oLink = document.createElement("link");
        oLink.rel = "stylesheet";
        oLink.type = "text/css";
        oLink.href = "./css/style.css";
        document.head.appendChild(oLink);
        var oProcessModel = new JSONModel({
          process: [],
        });
        this.getView().setModel(oProcessModel, "processModel");
        var oSupplierModel = new JSONModel({
          supplier: [],
        });
        this.getView().setModel(oSupplierModel, "supplierModel");
      },
      onAddProduct: function () {
        var productCode = this.byId("productCodeInput").getValue();
        var productDefinition = this.byId("productDefinitionInput").getValue();
        
        var oModel = this.getView().getModel("processModel");
        var aProducts = oModel.getProperty("/process") || [];
        
        aProducts.push({
          product_code: productCode,
          product_definition: productDefinition
        });
        
        oModel.setProperty("/process", aProducts);
        
        this.byId("productTable").getBinding("items").refresh();
  
        MessageToast.show("Product added successfully!");
      },
  
      onRemoveProduct: function (oEvent) {
       
        var oModel = this.getView().getModel("processModel");
        var aProducts = oModel.getProperty("/process");
        
        var sPath = oEvent.getSource().getBindingContext("processModel").getPath();
        var iIndex = parseInt(sPath.split("/").pop(), 10);
        
        aProducts.splice(iIndex, 1);

        oModel.setProperty("/process", aProducts);
  
        this.byId("productTable").getBinding("items").refresh();
  
        MessageToast.show("Product removed successfully!");
      },

      onSaveProcessData: function () {
        const receipt_no = "REC" + Math.floor(Math.random() * 1000000);
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

        const net_weighing = last_weighing - first_weighing;

        const entry_date = new Date(
          this.byId("entryDateInput").getValue()
        ).toLocaleDateString("tr-TR");
        const release_date = new Date(
          this.byId("releaseDateInput").getValue()
        ).toLocaleDateString("tr-TR");
        const delivery_date = new Date(
          this.byId("deliveryDateInput").getValue()
        ).toLocaleDateString("tr-TR");
        const delivery_no = this.byId("deliveryNoInput").getValue();

        if (
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
          isNaN(first_weighing) ||
          isNaN(last_weighing) ||
          isNaN(net_weighing) ||
          !entry_date ||
          !release_date ||
          !delivery_date ||
          !delivery_no
        ) {
          sap.m.MessageToast.show(
            "Lütfen tüm alanları doldurun ve geçerli değerler girin."
          );
          return;
        }

        fetch("http://localhost:3000/process", {
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
            first_weighing,
            last_weighing,
            net_weighing,
            entry_date,
            release_date,
            delivery_date,
            delivery_no,
            title,
          }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("API hatası");
            }
            return response.json();
          })
          .then((data) => {
            sap.m.MessageToast.show("Data başarıyla kaydedildi!");
            console.log("Kaydedilen data:", data);
          })
          .catch((error) => {
            sap.m.MessageToast.show("Hata oluştu: " + error.message);
            console.error("Error:", error);
          });

        // Send supplier data
        fetch("http://localhost:3000/suppliers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            address,
            tax_office,
            tax_number,
          }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("API hatası");
            }
            return response.json();
          })
          .then((data) => {
            sap.m.MessageToast.show("Data data başarıyla kaydedildi!");
            console.log("Kaydedilen supplier data:", data);
          })
          .catch((error) => {
            sap.m.MessageToast.show("Hata oluştu: " + error.message);
            console.error("Error:", error);
          });
      },

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
                    // new sap.m.Input({
                    //   value: "{processModel>title}",
                    //   editable: true,
                    // }),
                    // new sap.m.Input({
                    //   value: "{processModel>address}",
                    //   editable: true,
                    // }),
                    new sap.m.Input({
                      value: "{processModel>title}",
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
      onFetchSupplier: function () {
        fetch("http://localhost:3000/suppliers")
          .then((response) => response.json())
          .then((data) => {
            console.log("Fetched Data:", data);
            if (data && Array.isArray(data) && data.length > 0) {
              var oModel = new sap.ui.model.json.JSONModel();
              oModel.setData({ suppliers: data });
              this.getView().setModel(oModel, "supplierModel");
              this.byId("supplierTable").bindItems({
                path: "supplierModel>/suppliers",
                template: new sap.m.ColumnListItem({
                  cells: [
                    new sap.m.Input({
                      value: "{supplierModel>title}",
                      editable: true,
                    }),
                    new sap.m.Input({
                      value: "{supplierModel>address}",
                      editable: true,
                    }),
                    new sap.m.Input({
                      value: "{supplierModel>tax_office}",
                      editable: true,
                    }),
                    new sap.m.Input({
                      value: "{supplierModel>tax_number}",
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

        aItems.forEach(function (oItem) {
          var oBindingContext = oItem.getBindingContext("processModel");
          var oData = oBindingContext.getObject();

          fetch(`http://localhost:3000/process/${oData.id}`, {
            method: "PUT",
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
      onSaveSupplierEditData: function () {
        var oTable = this.byId("supplierTable");
        var aItems = oTable.getItems();

        aItems.forEach(function (oItem) {
          var oBindingContext = oItem.getBindingContext("supplierModel");
          var oData = oBindingContext.getObject();

          fetch(`http://localhost:3000/suppliers/${oData.id}`, {
            method: "PUT",
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
          aFilters.push(
            new sap.ui.model.Filter(
              "title",
              sap.ui.model.FilterOperator.Contains,
              title
            )
          );
        }

        if (license_plate) {
          aFilters.push(
            new sap.ui.model.Filter(
              "license_plate",
              sap.ui.model.FilterOperator.Contains,
              license_plate
            )
          );
        }

        if (startDate && endDate) {
          var startDateFilter = new sap.ui.model.Filter(
            "entry_date",
            sap.ui.model.FilterOperator.GE,
            startDate
          );
          var endDateFilter = new sap.ui.model.Filter(
            "entry_date",
            sap.ui.model.FilterOperator.LE,
            endDate
          );
          aFilters.push(startDateFilter, endDateFilter);
        } else if (startDate) {
          aFilters.push(
            new sap.ui.model.Filter(
              "entry_date",
              sap.ui.model.FilterOperator.GE,
              startDate
            )
          );
        } else if (endDate) {
          aFilters.push(
            new sap.ui.model.Filter(
              "entry_date",
              sap.ui.model.FilterOperator.LE,
              endDate
            )
          );
        }

        var oTable = this.byId("processTable");
        var oBinding = oTable.getBinding("items");
        oBinding.filter(aFilters);

        console.log(oBinding);
      },
      onDownloadExcel: function () {
        var oTable = this.byId("processTable");
        var oBinding = oTable.getBinding("items");

        //oContext tabloda görüntülenen satırlar
        var aFilteredData = oBinding.getContexts().map(function (oContext) {
          return oContext.getObject();
        });

        if (!aFilteredData || aFilteredData.length === 0) {
          sap.m.MessageToast.show("İndirilecek filtrelenmiş veri bulunamadı!");
          return;
        }

        const worksheet = XLSX.utils.json_to_sheet(aFilteredData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(
          workbook,
          worksheet,
          "Filtrelenmiş Veriler"
        );

        XLSX.writeFile(workbook, "FilteredData.xlsx");

        sap.m.MessageToast.show("Filtrelenmiş Excel dosyası indirildi!");
      },
    });
  }
);
