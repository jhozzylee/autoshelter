import { type SchemaTypeDefinition } from 'sanity'
import vehicle from './vehicle' 
import inventory from './inventory'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [vehicle, inventory],
}