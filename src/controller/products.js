const Product = require('../models/product');

// GET '/products'
const getProducts = async (req, res, next) => {
  const url = `${req.protocol}://${req.get('host')}${req.path}`;
  const limit = parseInt(req.query.limit, 10) || 10;
  const page = parseInt(req.query.page, 10) || 1;
  const skip = (limit * page) - limit;
  try {
    const products = await Product.getProductsPag(skip, limit);
    const totalProducts = await Product.getProducts();
    const headerPagination = pagination(url, page, limit, totalProducts.length);
    resp.set('link', headerPagination);

    const listProduct = [];
    products.forEach((product) => {
      listProduct.push({
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        type: product.type,
        dateEntry: product.dateEntry,
      });
    });
    return res.status(200).json(listProduct);
  } catch (err) {
    return next(err);
  }
};

//   app.get('/products', requireAdmin, getProducts);
// GET '/products/:uid'

const getOneProduct = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = await Product.getProduct({ productId });
    if (product === null){
      return next(404);
    }
    return res.status(200).json({
        _id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        type: product.type,
        dateEntry: product.dateEntry,
      });
  } catch (err) {
    next(err);
  }
};

// POST '/products'

const newProduct = async (req, res, next) => {
  const { body: product } = req;
  if (!req.body.name || !req.body.price || typeof req.body.price !== 'number') {
    return next(400);
  }

  try {
    // const createProduct = await productsService.createProduct({ product });
    const newProduct = new Product(req.body);
    const product = await newProduct.save(newProduct);
    return res.status(200).json({
        _id: createProduct,
        name: product.name,
        price: product.price,
        image: product.image,
        type: product.type,
        dateEntry: new Date(),
        message: 'product created',
      });
  } catch (err) {
    return next(err);
  }
};

// PUT '/products/:uid'

const updateProduct = async (req, res, next) => {
  const { productId } = req.params;
  const { body: product } = req;
  product.dateEntry = new Date();

  if ((!req.body.name && !req.body.price && !req.body.image && !req.body.type) || (typeof req.body.price !== 'number')) {
    return next(400);
  }

  const validateProductId = await Product.getProduct({ productId });
  if (!validateProductId) {
    return next(404);
  }
  try {
    const updateProduct = await Product.updateProduct({ productId, product });
    return res.status(200).json({
        _id: updateProduct,
        name: product.name,
        price: product.price,
        image: product.image,
        type: product.type,
        dateEntry: product.dateEntry,
        message: 'product update',
      });
  } catch (err) {
    return next(err);
  }
};

// DELETE '/products/:uid'

const deleteOneProduct = async (req, res, next) => {
  const { productId } = req.params;

  const checkProduct = await Product.getProduct({ productId });
  if (!checkProduct) {
    return next(404);
  }

  try {
    const productDelete = await Product.deleteProduct({ productId });
    return resp.status(200).json({
      _id: productDelete,
      name: checkProduct.name,
      price: checkProduct.price,
      image: checkProduct.image,
      type: checkProduct.type,
      dateEntry: checkProduct.dateEntry,
      message: 'product delete',
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getProducts,
  newProduct,
  updateProduct,
  getOneProduct,
  deleteOneProduct,
};
