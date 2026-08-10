import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'inventory',
  title: 'Inventory',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: "Filters", value: "Filters" },
          { title: "Brakes", value: "Brakes" },
          { title: "Suspension", value: "Suspension" }, // <-- Added here
          { title: "Engine Parts", value: "Engine Parts" },
          { title: "Cooling System", value: "Cooling System" },
          { title: "Wheels", value: "Wheels" },
          { title: "Electrical", value: "Electrical" },
          { title: "Exterior", value: "Exterior" },
          { title: "Accessories", value: "Accessories" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'brand',
      title: 'Brand',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g. ₦18,000',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      initialValue: true,
      validation: (Rule) => Rule.required(),
    }),
  ],
})