// This function is the endpoint's request handler.
exports = async function(payload, response) {
    const collection = context.services.get("mongodb-atlas").db("rainbowDB").collection("truck");
    let truckInfo = await collection.find().toArray();
    return  truckInfo;
};
