const asyncHandler = require("express-async-handler");
const Master = require("../models/master");
const Transaction = require("../models/transaction");
const Print = require("../models/print");
//it is a logic page

// 1. GET /api/master
const getMaster = asyncHandler(async (req, res) => {
  const masters = await Master.find();
  res.status(200).json(masters);
});

// 2. POST /api/master
const postMaster = asyncHandler(async (req, res) => {
  //   console.log(req.body);
  const {
    Code,
    Name,
    Dept,
    PrevBalance,
    Location,
    LastReading,
    MeterCharge,
    UnitRate,
    LastDate,
    Allocation,
    LastPaymentDate,
  } = req.body;
  if (
    !Code ||
    !Name ||
    !Dept ||
    !PrevBalance ||
    !Location ||
    !LastReading ||
    !MeterCharge ||
    !UnitRate ||
    !LastDate ||
    !Allocation ||
    !LastPaymentDate
  ) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  } else {
    const newMaster = await Master.create({
      Code,
      Name,
      Dept,
      PrevBalance,
      Location,
      LastReading,
      MeterCharge,
      UnitRate,
      LastDate,
      Allocation,
      LastPaymentDate,
    });
    res.status(201).json(newMaster);
  }
  //now putting
});

// 3. GET /api/transaction
const getTransaction = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "transaction is working fine" });
});

// 4. POST /api/transaction
const postTransaction = asyncHandler(async (req, res) => {
  //   console.log(req.body);
  const {
    Code,
    ToDate,
    CurrentReading,
    CurrentPayment,
    CurrentPaymentDate,
    CurrentCharges,
  } = req.body;
  if (!Code || !ToDate || !CurrentReading) {
    res.status(400);
    throw new Error(" fields are mandatory !");
  } else {
    //ADDING IN TRANSACTION DATABASE

    //     const newTransaction = await Transaction.create({
    //       Code,
    //       ToDate,
    //       CurrentReading,
    //       CurrentPayment,
    //       CurrentPaymentDate,
    //       CurrentCharges,
    //     });

    //logic and calculation ;
    console.log(req.body.Code);
    const docsInMaster = await Master.find({ Code: req.body.Code });
    //     const docsInTransaction = await Transaction.find({Code:req.body.Code}) ;
    //     console.log(docsInMaster[0].Dept);
    //     console.log(docsInTransaction.CurrentCharges);
    const printCode = Code;
    const date_time = new Date();
    const date = ("0" + date_time.getDate()).slice(-2);
    //      // get current month
    const month = ("0" + (date_time.getMonth() + 1)).slice(-2);
    //     // get current year
    const year = date_time.getFullYear();
    const printDateGen = date + "/" + month + "/" + year;
    const printPreviousBalance = docsInMaster[0].PrevBalance;
    const printCurrentCharges =
      (CurrentReading - docsInMaster[0].LastReading) *
        docsInMaster[0].UnitRate +
      docsInMaster[0].MeterCharge;
    const printTotalDue =
      printPreviousBalance + printCurrentCharges - CurrentPayment;
    const printLastPayment = CurrentPayment;
    // given code is present in print
    const docsInPrint = await Print.find({ Code: req.body.Code });
    if (docsInPrint.length) {
      //then add or push the new transaction

      const newData = {
        DateGen: printDateGen,
        PreviousBalance: printPreviousBalance,
        CurrentCharges: printCurrentCharges,
        TotalDue: printTotalDue,
        LastPayment: printLastPayment,
      };
      const newPrint = await Print.findOneAndUpdate(
        { Code: req.body.Code },
        { $push: { Data: newData } }
      );
      const docsInPrintAfter = await Print.find({ Code: req.body.Code });
      const updatedMasterdocs = {
        PrevBalance: printTotalDue,
        LastReading: CurrentReading,
        LastDate: printDateGen,
      };
      const updateMaster = await Master.findOneAndUpdate(
        { Code: req.body.Code },
        updatedMasterdocs
      );
      res.status(200).json(docsInPrintAfter);
    } else {
      //set the new transaction with the new code
      const newData = {
        DateGen: printDateGen,
        PreviousBalance: printPreviousBalance,
        CurrentCharges: printCurrentCharges,
        TotalDue: printTotalDue,
        LastPayment: printLastPayment,
      };
      const newPrint = await Print.create({
        Code: printCode,
        Data: [newData],
      });
      const updatedMasterdocs = {
        PrevBalance: printTotalDue,
        LastReading: CurrentReading,
        LastDate: printDateGen,
      };
      const updateMaster = await Master.findOneAndUpdate(
        { Code: req.body.Code },
        updatedMasterdocs
      );
      res.status(200).json(newPrint);
    }
  }
});

// 5. GET /api/print
const getPrint = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "print is working fine" });
});

// 6. POST /api/print
const postPrint = asyncHandler(async (req, res) => {});

module.exports = {
  getMaster,
  postMaster,
  getTransaction,
  postTransaction,
  getPrint,
  postPrint,
};
