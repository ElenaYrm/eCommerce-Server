import { AddressModel } from './addressModel';
import { OrderModel } from './orderModel';
import { UserModel } from './userModel';
import { PromoModel } from './promoModel';
import { OrderPromoModel } from './orderPromoModel';
import { OrderItemsModel } from './orderItemsModel';
import { ProductModel } from './productModel';
import { ImageModel } from './imageModel';
import { DiscountModel } from './discountModel';
import { ColorModel } from './colorModel';
import { ArtistModel } from './artistModel';
import { SubcategoryModel } from './subcategoryModel';
import { CategoryModel } from './categoryModel';
import { ProductColorModel } from './productColorModel';

UserModel.hasMany(AddressModel);
AddressModel.belongsTo(UserModel);

UserModel.hasOne(OrderModel);
OrderModel.belongsTo(UserModel);

PromoModel.belongsToMany(OrderModel, { through: OrderPromoModel });
OrderModel.belongsToMany(PromoModel, { through: OrderPromoModel });

OrderModel.hasMany(OrderItemsModel);
OrderItemsModel.belongsTo(OrderModel);

ProductModel.hasOne(OrderItemsModel);
OrderItemsModel.belongsTo(ProductModel);

ProductModel.hasMany(ImageModel);
ImageModel.belongsTo(ProductModel);

DiscountModel.hasMany(ProductModel);
ProductModel.belongsTo(DiscountModel);

ArtistModel.hasMany(ProductModel);
ProductModel.belongsTo(ArtistModel);

ColorModel.belongsToMany(ProductModel, { through: ProductColorModel });
ProductModel.belongsToMany(ColorModel, { through: ProductColorModel });

SubcategoryModel.hasMany(ProductModel);
ProductModel.belongsTo(SubcategoryModel);

CategoryModel.hasMany(SubcategoryModel);
SubcategoryModel.belongsTo(CategoryModel);

export {
  UserModel,
  AddressModel,
  OrderModel,
  PromoModel,
  OrderItemsModel,
  ProductModel,
  ImageModel,
  ArtistModel,
  ColorModel,
  SubcategoryModel,
  CategoryModel,
  DiscountModel,
};
