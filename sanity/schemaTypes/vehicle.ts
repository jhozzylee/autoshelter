import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'vehicle',
  title: 'Vehicles',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Car Name',
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
      name: 'brand',
      title: 'Brand',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'model',
      title: 'Model',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Vehicle Type',
      type: 'string',
      options: {
        list: [
          { title: 'Gasoline', value: 'Gasoline' },
          { title: 'Electric', value: 'Electric' },
          { title: 'Hybrid', value: 'Hybrid' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g. ₦85,000,000',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'specifications',
      title: 'Specifications',
      type: 'object',
      fields: [
        { name: 'engine', title: 'Engine', type: 'string' },
        { name: 'transmission', title: 'Transmission', type: 'string' },
        { name: 'mileage', title: 'Mileage', type: 'string' },
        { name: 'doors', title: 'Doors', type: 'string' },
        { name: 'seats', title: 'Seats', type: 'string' },
      ],
    }),
  ],
})