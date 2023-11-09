const {adddocuments,slarymorethan30000,experiancemorethan2years,grad20151,update,deleted}=require("../controller/controller")

const router=require("express").Router()

router.post("/adddocuments",adddocuments)
router.get("/slarymorethan30000",slarymorethan30000)
router.get("/experiancemorethan2years",experiancemorethan2years)
router.get("/grad20151",grad20151)
router.get("/update",update)
router.get("/deleted",deleted)
module.exports=router