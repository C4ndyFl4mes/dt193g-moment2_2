# API

## Beskrivning
Det här API:et hanterar en databas som lagrar anime favoriter. Det går att lista, lägga till, ändra och radera anime.

## Databas
API:et använder en NoSQL-databas, MongoDB, som består av en tabell, items.

Items-tabellen:
```json
{
  "id": "objectid",
  "name": "string",
  "rating": "number",
  "isDubbed": "boolean"
}
```
## Användning
API:et tillämpar CRUD för att hantera Items-tabellen.

Items
<table>
  <tr>
      <th>Metod</th>
      <th>Ändpunkt</th>
      <th>Body</th>
      <th>Headers</th>
      <th>Beskrivning</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>/items</td>
    <td></td>
    <td></td>
    <td>Hämtar alla animes</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/item</td>
    <td>name, rating, isDubbed</td>
    <td>"content-type": "application/json"</td>
    <td>Lägger till en anime i listan</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>/item/:id</td>
    <td>name, rating, isDubbed</td>
    <td>"content-type": "application/json"</td>
    <td>Ändrar en anime från listan</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>/item/:id</td>
    <td></td>
    <td></td>
    <td>Raderar en anime från listan</td>
  </tr>
</table>
