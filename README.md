# topaz-project
# Project Overview

## Palette Search Tool
[placeholder]()

## Project Description

This web-based app uses the Cooper Hewitt database to generate art peices through a color picker functionality. The user can press a colored button to generate an artwork that has the input color. A random art work will return listing the title, medium, and full color palatte. This is basically a search tool for finding art with a specific color.

## API and Data Sample
[API:] (https://collection.cooperhewitt.org/api/)
API endpoint that grabs colors based off Object ID of one of the museum objects. There will be a function that string interpolates the color input and a Math.random function which will produce a number from 1-10 that will act as the "page number". The API endpoint for the event listener will contain two parameters which are string interpolated.
```
    "object_id": "18345487",
    "colors": [
        {
            "color": "#f4e9c2",
            "closest_crayola": "#eceabe",
            "closest_css3": "#ffe4c4",
            "closest_css4": "#ffe4c4"
        }
    ],
    "stat": "ok",
    "event_publishing_state": "ok"
```
Another endpoint that returns all information about an object, including its ID and IMG URL. This enpoint returns one object if the parameters are set to "page: " and "per page: 1"
```
{
    "objects": [
        {
            "id": "18638207",
            "tms:id": "193963",
            "accession_number": "1991-91-2-a,b",
            "title": "Razor, Shield",
            "title_raw": null,
            "url": "https://collection.cooperhewitt.org/objects/18638207/",
            "has_no_known_copyright": null,
            "department_id": "35347497",
            "period_id": null,
            "media_id": "35380379",
            "type_id": "35237243",
            "date": null,
            "year_start": null,
            "year_end": null,
            "year_acquired": "1991",
            "decade": null,
            "woe:country_id": null,
            "medium": "plastic, steel",
            "markings": null,
            "signed": null,
            "inscribed": null,
            "provenance": null,
            "dimensions": null,
            "dimensions_raw": null,
            "creditline": "Gift of David McFadden",
            "description": "blue; rectangular blade cover",
            "justification": null,
            "gallery_text": null,
            "label_text": null,
            "videos": null,
            "on_display": null,
            "woe:country": null,
            "type": "razor, shield",
            "images": [
                {
                    "b": {
                        "url": "https://images.collection.cooperhewitt.org/163663_35bdb7f58e9e52e5_b.jpg",
                        "width": 1024,
                        "height": 645,
                        "is_primary": "1",
                        "image_id": "163663"
                    },
                    "z": {
                        "url": "https://images.collection.cooperhewitt.org/163663_35bdb7f58e9e52e5_z.jpg",
                        "width": 640,
                        "height": 403,
                        "is_primary": "1",
                        "image_id": "163663"
                    },
                    "n": {
                        "url": "https://images.collection.cooperhewitt.org/163663_35bdb7f58e9e52e5_n.jpg",
                        "width": 320,
                        "height": 202,
                        "is_primary": "1",
                        "image_id": "163663"
                    },
                    "d": {
                        "url": "https://images.collection.cooperhewitt.org/163663_35bdb7f58e9e52e5_d.gif",
                        "width": 320,
                        "height": 202,
                        "is_primary": "1",
                        "image_id": "163663"
                    },
                    "sq": {
                        "url": "https://images.collection.cooperhewitt.org/163663_35bdb7f58e9e52e5_sq.jpg",
                        "width": 300,
                        "height": 300,
                        "is_primary": "1",
                        "image_id": "163663"
                    }
                }
            ],
            "participants": [
                {
                    "person_id": "18049699",
                    "role_id": "35351535",
                    "person_name": "David McFadden",
                    "person_date": "",
                    "role_name": "Donor",
                    "role_display_name": "Donated by",
                    "person_url": "https://collection.cooperhewitt.org/people/18049699/",
                    "role_url": "https://collection.cooperhewitt.org/roles/35351535/"
                },
                {
                    "person_id": "18044345",
                    "role_id": "35236657",
                    "person_name": "Wilkinson",
                    "person_date": "",
                    "role_name": "Manufacturer",
                    "role_display_name": "Manufactured by",
                    "person_url": "https://collection.cooperhewitt.org/people/18044345/",
                    "role_url": "https://collection.cooperhewitt.org/roles/35236657/"
                }
            ],
            "is_loan_object": 0,
            "category": "objects"
        },
```
## Wireframes
[wireframe](https://wireframe.cc/3G5d96)


### MVP/PostMVP

#### MVP 
- Create color picker functionality with buttons
- Have mediaquery that allows to smooth transition
- Return a randomized artwork and description that contains one of the specified colors

#### PostMVP  
- Be able to search by multiple colors 
- Add stylized border around the picture frame that matches the color chosen
- Add a consistent CSS theme and button wiggles
- Add time-periods as a search option

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|Feb 22-23| Prompt / Wireframes / Priority Matrix / Timeframes | complete
|Feb 23| Project Approval / Start Psuedocode/ HTML | complete
|Feb 24| Initial API call, Core Application Structure (HTML, CSS, etc.), and outline functions | complete
|Feb 24| Work on JavaScript and set up event listeners| complete
|Feb 25| CSS, test for functionality, MVP | complete
|Feb 26| Media query, and work on post-MVP's including a multiple parameter search | complete
|March 1| Presentations | Incomplete

## Priority Matrix
[priority matrix](https://lucid.app/lucidchart/invitations/accept/1194e4e0-8e7a-4e6b-bbaa-8b69f5ed40aa)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Research | H | 3hrs| 3.5hrs | 3.5hrs |
| Making Project Proposal | H | 3hrs| 3hrs | 3hrs |
| Adding Psuedocode | H | 2hrs| 1 | 1 |
| Retreiving the API Endpoints necessary | H | 2hrs| 2.5 | 2.5 |
| Testing API Endpoints | H | 2hrs| 2 | 2 |
| Make Try/Catch | H | 1hrs | .5 | .5 |
| Add Axios and Await | H | 1hrs| .5 | .5 |
| Create HTML structure | H | 1hrs| 1 | 1 |
| Make CSS buttons and flexboxes | H | 3hrs| 3hrs | 3hrs |
| Set up JS forms | H | 3hrs| 1 | 1 |
| Add Eventlisteners | H | 3hrs| 1 | 1 |
| Grab user input | H | 2hrs| 1.5 | 1.5 |
| Link user's color choice to returned object ID's | H | 3hrs| 2 | 2 |
| Return image of the object ID | H | 2hrs| 0 | 0 |
| Add mediaQuery | H | 3hrs| 3hrs | 3hrs |
| Format response and parameters | H | 2.5hrs| 2 | 2 |
| Test functionality | H | 3hrs| 3 | 3 |
| Add CSS picture frame | H | 3hrs| 0 | 0 |
| Re-format page | H | 3hrs| 2 | 2 |
| Style buttons and text responses | H | 3hrs| 3 | 3 |
| Total | H | 49hrs| 39.5hrs | 39.5hrs |

## Code Snippet

With this function I felt that I had started to really understand how the API was working and gained a lot of confidence with the possibilities of accessing the API. For a while I thought I would have to use multiple API calls, but with more time working on the API I found a way to keep it at one API call. 

```
function showImage(data) {
  const imageContainer = document.querySelector("#art-image")
  const artImage = `
  <img src="${data.images[0].b.url}" alt="artwork" class="artwork"/>
  `
  imageContainer.insertAdjacentHTML("beforeend", artImage)
}
```

## Change Log
For one of my post-MVPs I decided it would be best not to add a border because of the changing image dimensions.
