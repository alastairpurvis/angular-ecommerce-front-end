angular.module('templates-main', ['/pages/brand.html', '/pages/cart.html', '/pages/category.html', '/pages/checkout.html', '/pages/collection.html', '/pages/collections.html', '/pages/complete.html', '/pages/error.html', '/pages/home.html', '/pages/page.html', '/pages/payment.html', '/pages/product.html', '/pages/search.html', '/pages/partials/image-zoom.html']);

angular.module("/pages/brand.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("/pages/brand.html",
    "<div class=row><div class=col-md-12><div class=breadcrumbs><ul class=breadcrumb><li><a href=/ >Home</a> <span class=divider></span></li><li class=active>{{ brand.title }}</li></ul></div></div></div><div class=row><div class=col-md-12><div class=cat_header><h2>{{ brand.title }}</h2></div></div></div><div class=\"row box collection\"><div class=col-md-7><p>{{ brand.description }}</p></div><div class=col-md-5><img alt=\"{{ brand.title }}\" ng-src=\"{{ brand.image.url.http }}\"></div></div><div class=row><div class=col-md-3 ng-repeat=\"product in products\"><div class=product><div class=product_sale ng-if=\"product.on_sale.data.key == 1\">Sale</div><a href=\"/product/{{ product.slug }}\" class=img-cont><img alt=\"{{ product.title }}\" ng-src=\"{{ Page.image.resize(product.image, 213, 213) }}\"></a><div class=name><a href=\"/product/{{ product.slug }}\">{{ product.title }}</a></div><div class=price ng-if=\"product.on_sale.data.key == 1\"><p><span class=strike>{{ product.pricing.formatted.with_tax }}</span> &pound;{{ product.sale_price }}.00</p></div><div class=price ng-if=\"product.on_sale.data.key != 1\"><p>{{ product.pricing.formatted.with_tax }}</p></div></div></div></div><div class=row><div class=col-md-12><pagination total-items=pagination.total items-per-page=pagination.limit page=pageCurrent class=\"pagination pull-right\" previous-text=&lsaquo; next-text=&rsaquo;></pagination></div></div>");
}]);

angular.module("/pages/cart.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("/pages/cart.html",
    "<div class=row><div class=col-md-12><div class=breadcrumbs><ul class=breadcrumb><li><a href=/ >Home</a> <span class=divider></span></li><li class=active>Shopping Cart</li></ul></div></div></div><div class=row><div class=col-md-12><h2>Shopping Cart</h2></div></div><div class=row><div class=col-md-12><div class=cart-info><table class=table><thead><tr><th class=image>Image</th><th>Product</th><th>Model</th><th>Price</th><th>Quantity</th><th class=total>Total</th></tr></thead><tbody><tr ng-repeat=\"(key,product) in cart.contents\"><td class=image><img alt=\"{{ product.title }}\" ng-src=\"{{ Page.image.resize(product.image, 100, 100) }}\"></td><td class=name><a href=\"/product/{{ product.slug }}\">{{ product.title }}</a></td><td>{{ product.sku }}</td><td>{{ product.pricing.formatted.with_tax }}</td><td class=quantity><input type=text size=1 value=\"{{ product.quantity }}\" id=\"c_{{ key }}\" name=\"qty[{{ key }}]\"> <input type=image title=Update alt=Update src=/img/update.png ng-id=\"{{ key }}\" ng-qty=\"#c_{{ key }}\" cart-qty> <input type=image title=Remove alt=Remove src=/img/remove.png ng-id=\"{{ key }}\" ng-qty=0 cart-qty></td><td class=total>{{ product.totals.pre_discount.formatted.with_tax }}</td></tr></tbody></table></div></div></div><div class=row><div class=col-sm-8><div class=\"newsletter clearfix\"><div><input type=text name=discount class=discount placeholder=\"Discount code...\"> <button value=apply class=\"btn btn-primary\">Apply</button> <button value=remove class=\"btn btn-primary\">Remove</button></div></div></div><div class=col-sm-4><div class=cart-totals><table class=table><tr><th>Cart Subtotal</th><td>{{ cart.totals.pre_discount.formatted.without_tax }}</td></tr><tr><th>Shipping</th><td>Free Shipping</td></tr><tr><th><span>Order Total</span></th><td>{{ cart.totals.pre_discount.formatted.with_tax }}</td></tr></table><p><a class=\"btn btn-primary\" href=/checkout>Proceed to Checkout</a></p></div></div></div>");
}]);

angular.module("/pages/category.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("/pages/category.html",
    "<div class=row><div class=col-md-12><div class=breadcrumbs><ul class=breadcrumb><li><a href=/ >Home</a> <span class=divider></span></li><li ng-if=category.parent.data.parent><a href=\"/category/{{ category.parent.data.parent.data.slug }}\">{{ category.parent.data.parent.data.title }}</a> <span class=divider></span></li><li ng-if=category.parent><a href=\"/category/{{ category.parent.data.slug }}\">{{ category.parent.data.title }}</a> <span class=divider></span></li><li class=active>{{ category.title }}</li></ul></div></div></div><div class=row><div class=col-md-12><div class=cat_header><h2>{{ category.title }}</h2></div></div></div><div class=row><div class=col-md-3 ng-repeat=\"product in products\"><div class=product><div class=product_sale ng-if=\"product.on_sale.data.key == 1\">Sale</div><a href=\"/product/{{ product.slug }}\" class=img-cont><img alt=\"{{ product.title }}\" ng-src=\"{{ Page.image.resize(product.image, 213, 213) }}\"></a><div class=name><a href=\"/product/{{ product.slug }}\">{{ product.title }}</a></div><div class=price ng-if=\"product.on_sale.data.key == 1\"><p><span class=strike>{{ product.pricing.formatted.with_tax }}</span> &pound;{{ product.sale_price }}.00</p></div><div class=price ng-if=\"product.on_sale.data.key != 1\"><p>{{ product.pricing.formatted.with_tax }}</p></div></div></div></div><div class=row><div class=col-md-12><pagination total-items=pagination.total items-per-page=pagination.limit page=pageCurrent class=\"pagination pull-right\" previous-text=&lsaquo; next-text=&rsaquo;></pagination></div></div>");
}]);

angular.module("/pages/checkout.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("/pages/checkout.html",
    "<div class=row><div class=col-md-12><div class=breadcrumbs><ul class=breadcrumb><li><a href=/ >Home</a> <span class=divider></span></li><li><a href=/cart>Shopping Cart</a> <span class=divider></span></li><li class=active>Checkout</li></ul></div></div></div><div class=row><div class=col-md-12><h2>Checkout</h2></div></div><form class=form-horizontal role=form ng-submit=createOrder(data)><div class=\"row box\"><div class=col-md-6><h3>Billing Address</h3><div class=billing-address><div class=form-group ng-repeat=\"field in fields\" ng-if=\"field.slug != 'customer'\"><label class=\"col-md-4 control-label\" for=\"bill_{{ field.slug }}\">{{ field.name }}<span class=required ng-if=field.required>*</span></label><div class=col-md-8 ng-switch on=field.type><select name=\"bill_{{ field.slug }}\" class=form-control ng-options=\"k as v for (k, v) in field.available\" ng-model=data.bill[field.slug] ng-switch-when=country></select><input type=text id=\"bill_{{ field.slug }}\" ng-model=data.bill[field.slug] class=form-control placeholder=\"{{ field.name }}\" ng-switch-default></div></div></div></div><div class=col-md-6><div class=\"shiptobilling clearfix\"><h3>Shipping Address</h3><label class=checkbox><input type=checkbox value=1 ng-model=data.ship_bill onclick=\"jQuery('.shipping-address').toggle()\">Ship to billing address?</label></div><div class=shipping-address style=\"display: block\"><div class=form-group ng-repeat=\"field in fields\" ng-if=\"field.slug != 'customer'\"><label class=\"col-md-4 control-label\" for=\"ship_{{ field.slug }}\">{{ field.name }} <span class=required ng-if=field.required>*</span></label><div class=col-md-8 ng-switch on=field.type><select name=\"ship_{{ field.slug }}\" class=form-control ng-options=\"k as v for (k, v) in field.available\" ng-model=data.ship[field.slug] ng-switch-when=country></select><input type=text id=\"ship_{{ field.slug }}\" ng-model=data.ship[field.slug] class=form-control placeholder=\"{{ field.name }}\" ng-switch-default></div></div></div></div></div><div class=row><div class=col-md-12><div class=your_order><h3>Your Order</h3><table class=\"table table-bordered table-responsive\"><thead><tr><th>Product</th><th>Qty</th><th>Totals</th></tr></thead><tfoot><tr class=subtotal><td></td><td><b>Cart Subtotal</b></td><td>{{ cart.totals.formatted.without_tax }}</td></tr><tr class=subtotal><td></td><td><b>Order Total</b></td><td>{{ cart.totals.formatted.with_tax }}</td></tr></tfoot><tbody><tr ng-repeat=\"(key,product) in cart.contents\"><td><a href=\"/product/{{ product.slug }}\">{{ product.title }}</a></td><td>{{ product.quantity }}</td><td>{{ product.totals.formatted.with_tax }}</td></tr></tbody></table><div class=row style=\"margin-bottom: 20px\" ng-if=options.shipping.methods.length><h3>Shipping</h3><div class=\"row box\"><div class=carrier ng-repeat=\"carrier in options.shipping.methods\"><label class=radio><input type=radio name=carrier value=\"{{ carrier.slug }}\" ng-model=data.shipping checked> {{ carrier.name }}</label><div class=\"carrier-{{ carrier.slug }}\">{{ carrier.description }}</div></div></div></div></div></div></div><div class=row><div class=col-md-12><h3>Payment</h3></div><div class=col-md-4 ng-repeat=\"gateway in options.gateways\"><div class=\"box padding\"><label class=radio><input type=radio name=gateway value=\"{{ gateway.slug }}\" ng-model=data.gateway checked> {{ gateway.name }}</label><div class=\"gateway gateway-{{ gateway.slug }}\">{{ gateway.description }}</div></div></div></div><button class=\"btn btn-primary pull-right\" type=submit style=\"margin: 20px 0\">Proceed to Payment</button></form>");
}]);

angular.module("/pages/collection.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("/pages/collection.html",
    "<div class=row><div class=col-md-12><div class=breadcrumbs><ul class=breadcrumb><li><a href=/ >Home</a> <span class=divider></span></li><li><a href=/collections>Collections</a> <span class=divider></span></li><li class=active>{{ collection.title }}</li></ul></div></div></div><div class=row><div class=col-md-12><div class=cat_header><h2>{{ collection.title }}</h2></div></div></div><div class=\"row box collection\"><div class=col-md-5><img alt=\"{{ collection.title }}\" ng-src=\"{{ collection.image.url.http }}\"></div><div class=col-md-7><p>{{ collection.description }}</p></div></div><div class=row><div class=col-md-3 ng-repeat=\"product in products\"><div class=product><div class=product_sale ng-if=\"product.on_sale.data.key == 1\">Sale</div><a href=\"/product/{{ product.slug }}\" class=img-cont><img alt=\"{{ product.title }}\" ng-src=\"{{ product.image.url.http }}\"></a><div class=name><a href=\"/product/{{ product.slug }}\">{{ product.title }}</a></div><div class=price ng-if=\"product.on_sale.data.key == 1\"><p><span class=strike>{{ product.pricing.formatted.with_tax }}</span> &pound;{{ product.sale_price }}.00</p></div><div class=price ng-if=\"product.on_sale.data.key != 1\"><p>{{ product.pricing.formatted.with_tax }}</p></div></div></div></div><div class=row><div class=col-md-12><pagination total-items=pagination.total items-per-page=pagination.limit page=pageCurrent class=\"pagination pull-right\" previous-text=&lsaquo; next-text=&rsaquo;></pagination></div></div>");
}]);

angular.module("/pages/collections.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("/pages/collections.html",
    "<div class=row><div class=col-md-12><div class=breadcrumbs><ul class=breadcrumb><li><a href=/ >Home</a> <span class=divider></span></li><li class=active>Collections</li></ul></div></div></div><div class=row><div class=col-md-12><div class=cat_header><h2>Collections</h2></div></div></div><div class=\"row box collection\" ng-repeat=\"collection in collections\"><div class=col-md-5 ng-if=$even><img alt=\"{{ collection.title }}\" ng-src=\"{{ collection.image.url.http }}\"></div><div class=col-md-7><a href=\"/collection/{{ collection.slug }}\" class=cat_header><h2>{{ collection.title }}</h2></a><p>{{ collection.description }}</p></div><div class=col-md-5 ng-if=$odd><img alt=\"{{ collection.title }}\" ng-src=\"{{ collection.image.url.http }}\"></div></div>");
}]);

angular.module("/pages/complete.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("/pages/complete.html",
    "<div class=row><div class=col-md-12><div class=breadcrumbs><ul class=breadcrumb><li><a href=/ >Home</a> <span class=divider></span></li><li><a href=/ >Shopping Cart</a> <span class=divider></span></li><li><a href=/ >Checkout</a> <span class=divider></span></li><li><a href=/ >Payment</a> <span class=divider></span></li><li class=active>{{ title }}</li></ul></div></div></div><div class=row><div class=col-md-12><h2>{{ title }}</h2></div></div><div class=row style=\"margin-bottom: 20px\"><div class=col-md-6><div class=loginbox><p>Billing Address</p><ul><li>{{ payment.order.bill_to.data.first_name }} {{ payment.order.bill_to.data.last_name }}</li><li ng-if=payment.order.bill_to.data.company>{{ payment.order.bill_to.data.company }}</li><li>{{ payment.order.bill_to.data.address_1 }}</li><li>{{ payment.order.bill_to.data.address_2 }}</li><li>{{ payment.order.bill_to.data.county }}</li><li>{{ payment.order.bill_to.data.postcode }}</li><li>{{ payment.order.bill_to.data.country.value }}</li></ul></div></div><div class=col-md-6><div class=loginbox><p>Shipping Address</p><ul><li>{{ payment.order.ship_to.data.first_name }} {{ payment.order.ship_to.data.last_name }}</li><li ng-if=payment.order.ship_to.data.company>{{ payment.order.ship_to.data.company }}</li><li>{{ payment.order.ship_to.data.address_1 }}</li><li>{{ payment.order.ship_to.data.address_2 }}</li><li>{{ payment.order.ship_to.data.county }}</li><li>{{ payment.order.ship_to.data.postcode }}</li><li>{{ payment.order.ship_to.data.country.value }}</li></ul></div></div></div><div class=row><div class=col-md-12><div class=your_order><table class=\"table table-bordered table-responsive\"><thead><tr><th>Product</th><th>Qty</th><th>Totals</th></tr></thead><tfoot><tr class=subtotal><td></td><td><b>Cart Subtotal</b></td><td>{{ cart.totals.formatted.without_tax }}</td></tr><tr class=subtotal><td></td><td><b>Order Total</b></td><td>{{ cart.totals.formatted.with_tax }}</td></tr></tfoot><tbody><tr ng-repeat=\"(key,product) in cart.contents\"><td><a href=\"/product/{{ product.slug }}\">{{ product.title }}</a></td><td>{{ product.quantity }}</td><td>{{ product.totals.formatted.with_tax }}</td></tr></tbody></table></div></div></div>");
}]);

angular.module("/pages/error.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("/pages/error.html",
    "<div class=row><div class=col-md-12><div class=breadcrumbs><ul class=breadcrumb><li><a href=/ >Home</a> <span class=divider></span></li><li class=active>{{ message.title }}</li></ul></div></div></div><div class=\"row bp\"><div class=col-md-12><h2>{{ message.title }}</h2></div></div><div class=\"row box padding\"><div class=col-md-6><h1 class=e404><strong>[{{ message.type }}]</strong></h1></div><div class=col-md-6><h1 class=page>{{ message.title }}</h1><h6 class=e404>{{ message.msg }}</h6><p><a class=\"btn btn-primary\" href=/ >Take me to the homepage!</a></p></div></div>");
}]);

angular.module("/pages/home.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("/pages/home.html",
    "<div class=row><div class=\"col-md-12 slideshow\"><div><img src=dist/img/slideshow/sub.jpg alt=\"Banner 1\"></div></div></div><div class=row><div class=\"col-md-3 left-menu\"><div><h3><a href=/collections>Collections</a></h3><ul><li ng-repeat=\"collection in collections\"><a href=\"/collection/{{ collection.slug }}\">{{ collection.title }}</a></li></ul></div><div class=options><select ng-options=\"cur.code as cur.title for cur in currencies\" ng-model=currency ng-change=Page.currencySet(currency)></select></div></div><div class=col-md-9><div class=row><div class=col-md-4 ng-repeat=\"product in products\"><div class=product><div class=product_sale ng-if=\"product.on_sale.data.key == 1\">Sale</div><a href=\"/product/{{ product.slug }}\" class=img-cont><img alt=\"{{ product.title }}\" ng-src=\"{{ Page.image.resize(product.image, 213, 213) }}\"></a><div class=name><a href=\"/product/{{ product.slug }}\">{{ product.title }}</a></div><div class=price ng-if=\"product.on_sale.data.key == 1\"><p><span class=strike>{{ product.pricing.formatted.with_tax }}</span> <strong>&pound;{{ product.sale_price }}.00</strong></p></div><div class=price ng-if=\"product.on_sale.data.key != 1\"><p><strong>{{ product.pricing.formatted.with_tax }}</strong></p></div></div></div></div><div class=row><div class=col-md-12><div class=\"newsletter clearfix\"><h3>Newsletter</h3><div><input type=text name=email class=email> <input type=submit value=Subscribe class=\"btn btn-primary\"></div></div></div></div></div></div>");
}]);

angular.module("/pages/page.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("/pages/page.html",
    "<div class=row><div class=col-md-12><div class=breadcrumbs><ul class=breadcrumb><li><a href=/ >Home</a> <span class=divider></span></li><li class=active>{{ content.title }}</li></ul></div></div></div><div class=row><div class=col-md-12><div class=cat_header><h2>{{ content.title }}</h2></div></div></div><div class=\"row page-content\"><div class=\"col-md-3 left-menu\"><div><h3>Pages</h3><ul><li ng-repeat=\"page in pages\" ng-if=\"page.sidebar.data.key == '1'\"><a href=\"/{{ page.slug }}\">{{ page.title }}</a></li></ul></div></div><div class=col-md-9><div class=\"row registerbox\"><div class=col-md-9><p class=text_about ng-bind-html=content.intro></p></div></div><div class=row><div class=col-md-9 ng-bind-html=content.contents></div></div></div></div>");
}]);

angular.module("/pages/payment.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("/pages/payment.html",
    "<div class=row><div class=col-md-12><div class=breadcrumbs><ul class=breadcrumb><li><a href=/ >Home</a> <span class=divider></span></li><li><a href=/cart>Shopping Cart</a> <span class=divider></span></li><li><a href=/checkout>Checkout</a> <span class=divider></span></li><li class=active>Payment</li></ul></div></div></div><div class=row><div class=col-md-12><h2>Payment</h2></div></div><div class=row><div class=col-md-3><div class=loginbox><p>Billing Address</p><ul><li>{{ order.bill_to.data.first_name }} {{ order.bill_to.data.last_name }}</li><li ng-if=order.bill_to.data.company>{{ order.bill_to.data.company }}</li><li>{{ order.bill_to.data.address_1 }}</li><li>{{ order.bill_to.data.address_2 }}</li><li>{{ order.bill_to.data.county }}</li><li>{{ order.bill_to.data.postcode }}</li><li>{{ order.bill_to.data.country.value }}</li></ul></div></div><div class=col-md-3><div class=loginbox><p>Shipping Address</p><ul><li>{{ order.ship_to.data.first_name }} {{ order.ship_to.data.last_name }}</li><li ng-if=order.ship_to.data.company>{{ order.ship_to.data.company }}</li><li>{{ order.ship_to.data.address_1 }}</li><li>{{ order.ship_to.data.address_2 }}</li><li>{{ order.ship_to.data.county }}</li><li>{{ order.ship_to.data.postcode }}</li><li>{{ order.ship_to.data.country.value }}</li></ul></div></div><div class=col-md-6><form class=\"loginbox form-horizontal\"><p>Payment</p><div class=form-group><label class=\"control-label col-md-4\" for=card>Card Number <span class=required>*</span></label><div class=col-md-8><input class=form-control id=card ng-model=data.number type=text card-format></div></div><div class=form-group><label class=\"control-label col-md-4\" for=expiry_month>Expiry Date <span class=required>*</span></label><div class=col-md-4><input class=form-control id=expiry_month ng-model=data.expiry_month type=text placeholder=DD></div><div class=col-md-4><input class=form-control id=expiry_year ng-model=data.expiry_year type=text placeholder=YYYY></div></div><div class=form-group><label class=\"control-label col-md-4\" for=start_month>Start Date</label><div class=col-md-4><input class=form-control id=start_month ng-model=data.start_month type=text placeholder=DD></div><div class=col-md-4><input class=form-control id=start_year ng-model=data.start_year type=text placeholder=YYYY></div></div><div class=form-group><label class=\"control-label col-md-4\" for=cv2>CV2 <span class=required>*</span></label><div class=col-md-4><input class=form-control id=cv2 ng-model=data.cvv type=text></div></div><div class=form-group><div class=col-md-12><button class=\"btn btn-primary\" type=button ng-click=payment(data)>Pay</button></div></div></form></div></div>");
}]);

angular.module("/pages/product.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("/pages/product.html",
    "<ul class=\"breadcrumb prod\"><li><a href=/ >Home</a> <span class=divider></span></li><li ng-if=product.category.parent.data.parent><a href=\"/category/{{ product.category.parent.data.parent.data.slug }}\">{{ product.category.parent.data.parent.data.title }}</a> <span class=divider></span></li><li ng-if=product.category.parent><a href=\"/category/{{ product.category.parent.data.slug }}\">{{ product.category.parent.data.title }}</a> <span class=divider></span></li><li><a href=\"/category/{{ product.category.slug }}\">{{ product.category.title }}</a> <span class=divider></span></li><li class=active>{{ product.title }}</li></ul><div class=\"row product-info\"><div class=col-md-6><div class=image image-src=\"{{ product.image.url.http }}\" image-zoom></div><div class=image-additional><a ng-repeat=\"image in product.images\" class=cloud-zoom-gallery ng-click=switchImage(image.url.http)><img alt=Image ng-src=\"{{ Page.image.resize(image, 74, 74) }}\"></a></div></div><div class=col-md-6><h1>{{ product.title }}</h1><div class=line></div><ul><li ng-if=product.brand><span>Brand:</span> <a href=\"/brand/{{ product.brand.slug }}\">{{ product.brand.title }}</a></li><li><span>Product Code:</span> {{ product.sku }}</li><li><span>Availability: </span>{{ product.stock_status.value }}</li><li ng-if=product.collection><span>Collection: </span><a href=\"/collection/{{ product.collection.data.slug }}\">{{ product.collection.data.title }}</a></li><li ng-if=product.brand><span>Brand: </span><a href=\"/brand/{{ product.brand.data.slug }}\">{{ product.brand.data.title }}</a></li></ul><div class=price ng-if=\"product.on_sale.data.key == 1\">Price <span class=strike>{{ product.pricing.formatted.with_tax }}</span> <strong>&pound;{{ product.sale_price }}.00</strong></div><div class=price ng-if=\"product.on_sale.data.key != 1\">Price <strong>{{ product.pricing.formatted.with_tax }}</strong></div><div id=modifiers><select ng-repeat=\"modifier in modifiers\" ng-if=\"modifier.type.data.key == 'variant'\" ng-model=mods[modifier.id] name=\"modifier[{{ modifier.id }}]\" title=\"{{ modifier.title }}\" ng-mod=\"{{ modifier.id }}\"><option value=0>{{ modifier.title }}</option><option value=\"{{ variation.id }}\" ng-repeat=\"variation in modifier.variations\">{{ variation.title }}</option></select></div><div class=line></div><form class=\"form-inline product-add\"><button ng-id=\"{{ product.id }}\" ng-qty=#qty ng-mod=#modifiers class=\"btn btn-primary\" cart-insert>Add to Cart</button><label>Qty:</label><input type=text placeholder=1 id=qty class=col-md-1></form><div class=tabs><ul class=\"nav nav-tabs\" id=myTab><li class=active><a href=#description>Description</a></li></ul><div class=tab-content><div class=\"tab-pane active\" id=home>{{ product.description }}</div></div></div></div></div><div class=related ng-if=products><h3 class=related>Related products</h3><div class=row><div class=col-md-3 ng-repeat=\"product in products\"><div class=product><div class=product_sale ng-if=\"product.on_sale.data.key == 1\">Sale</div><a href=\"/product/{{ product.slug }}\" class=img-cont><img alt=\"{{ product.title }}\" ng-src=\"{{ Page.image.resize(product.image, 213, 213) }}\"></a><div class=name><a href=\"/product/{{ product.slug }}\">{{ product.title }}</a></div><div class=price><p>{{ product.pricing.formatted.with_tax }}</p></div></div></div></div></div>");
}]);

angular.module("/pages/search.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("/pages/search.html",
    "<div class=row><div class=col-md-12><div class=breadcrumbs><ul class=breadcrumb><li><a href=/ >Home</a> <span class=divider></span></li><li class=active>Search</li></ul></div></div></div><div class=row><div class=col-md-12><h2>Search</h2></div></div><div class=\"row box search\"><div class=col-md-12><form class=form-horizontal ng-submit=Page.search(term)><div class=col-md-10><input type=text placeholder=Search ng-model=term class=form-control></div><div class=col-md-2><button class=\"btn btn-primary pull-right\" type=submit>Search</button></div></form></div></div><div class=row ng-if=products><div class=col-md-12><h2 class=search-criteria>Products matching \"{{ search }}\"</h2></div></div><div class=row ng-if=products><div class=col-md-3 ng-repeat=\"product in products\"><div class=product><div class=product_sale ng-if=\"product.on_sale.data.key == 1\">Sale</div><a href=\"/product/{{ product.slug }}\" class=img-cont><img alt=\"{{ product.title }}\" ng-src=\"{{ Page.image.resize(product.image, 213, 213) }}\"></a><div class=name><a href=\"/product/{{ product.slug }}\">{{ product.title }}</a></div><div class=price ng-if=\"product.on_sale.data.key == 1\"><p><span class=strike>{{ product.pricing.formatted.with_tax }}</span> &pound;{{ product.sale_price }}.00</p></div><div class=price ng-if=\"product.on_sale.data.key != 1\"><p>{{ product.pricing.formatted.with_tax }}</p></div></div></div></div><div class=row ng-if=!products.length><div class=col-md-12><div class=\"alert alert-info\">No products found matching your search criteria</div></div></div>");
}]);

angular.module("/pages/partials/image-zoom.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("/pages/partials/image-zoom.html",
    "<div class=image-zoom><div class=image-zoom-lens data-ng-style=getLensStyle()></div><img class=image ng-src=\"{{ imageSrc }}\"></div>");
}]);
