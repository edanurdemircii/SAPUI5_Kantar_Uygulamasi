const WeighingProcess = require("../models/WeighingProcess");
// Tüm product'ları getir
const getAllProcess = async (req, res) => {
  try {
    const process = await WeighingProcess.findAll();
    res.status(200).json(process);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProcess = async (req, res) => {
    console.log("req:", req.body);
  try {
    const {
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
    } = req.body;
    const process = await WeighingProcess.create({
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
    });
    res.status(201).json(process);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProcess = async (req, res) => {
    try {
        const { id } = req.params;
        const { receipt_no,
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
            delivery_no} = req.body;
        const [updated] = await WeighingProcess.update(
            { receipt_no,
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
                delivery_no },
            { where: { id } }
        );
        if (updated) {
            const updatedData = await WeighingProcess.findByPk(id);
            res.status(200).json(updatedData);
        } else {
            res.status(404).json({ error: "Data not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { getAllProcess, createProcess,updateProcess };
