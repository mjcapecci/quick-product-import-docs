export default function usePossibleHeaders() {
  const possibleHeaders = [
    { value: 'handle', label: 'Handle', required: true },
    { value: 'title', label: 'Title', required: true },
    { value: 'variant_sku', label: 'Variant SKU', required: true },
    { value: 'price', label: 'Variant Price', required: true },
    { value: 'description', label: 'Body (HTML)', required: false },
    { value: 'product_type', label: 'Type', required: false },
    { value: 'tags', label: 'Tags', required: false },
    { value: 'published', label: 'Published', required: false },
    { value: 'status', label: 'Status', required: false },
    { value: 'seo_title', label: 'SEO Title', required: false },
    { value: 'seo_description', label: 'SEO Description', required: false },
    {
      value: 'collections_to_join',
      label: 'Join Collections',
      required: false,
    },
    {
      value: 'collections_to_leave',
      label: 'Leave Collections',
      required: false,
    },
    {
      value: 'variant_inventory_qty',
      label: 'Variant Inventory Qty',
      required: false,
    },
    {
      value: 'variant_inventory_location',
      label: 'Variant Inventory Location',
      required: false,
    },
    {
      value: 'variant_position',
      label: 'Variant Position',
      required: false,
    },
    { value: 'option_1_name', label: 'Option1 Name', required: false },
    { value: 'option_1_value', label: 'Option1 Value', required: false },
    { value: 'option_2_name', label: 'Option2 Name', required: false },
    { value: 'option_2_value', label: 'Option2 Value', required: false },
    { value: 'option_3_name', label: 'Option3 Name', required: false },
    { value: 'option_3_value', label: 'Option3 Value', required: false },
    {
      value: 'variant_inventory_tracked',
      label: 'Variant Inventory Tracked',
      required: false,
    },

    {
      value: 'variant_inventory_policy',
      label: 'Variant Inventory Policy',
      required: false,
    },
    {
      value: 'variant_inventory_management',
      label: 'Variant Inventory Management',
      required: false,
    },
    {
      value: 'variant_compare_at_price',
      label: 'Variant Compare At Price',
      required: false,
    },
    {
      value: 'variant_requires_shipping',
      label: 'Variant Requires Shipping',
      required: false,
    },
    {
      value: 'variant_taxable',
      label: 'Variant Requires Taxable',
      required: false,
    },
    { value: 'variant_barcode', label: 'Variant Barcode', required: false },
    { value: 'variant_weight', label: 'Variant Weight', required: false },
    {
      value: 'variant_weight_unit',
      label: 'Variant Weight Unit',
      required: false,
    },
    { value: 'variant_tax_code', label: 'Variant Tax Code', required: false },
    { value: 'cost_per_item', label: 'Cost Per Item', required: false },
    { value: 'image_src', label: 'Image Src', required: false },
    { value: 'image_alt_text', label: 'Image Alt Text', required: false },
    { value: 'vendor', label: 'Vendor', required: false },
    { value: 'gift_card', label: 'Gift Card', required: false },
  ];
  return {
    all: possibleHeaders,
    required: possibleHeaders.filter((header) => header.required === true),
    optional: possibleHeaders.filter((header) => header.required === false),
    selectable: possibleHeaders.filter(
      (header) =>
        !['title', 'type', 'variant_sku', 'variant_inventory_qty'].includes(
          header.value
        )
    ),
  };
}
