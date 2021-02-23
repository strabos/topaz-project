# topaz-project
# Project Overview

## Palette Search Tool
[placeholder]()

## Project Description

This web-based app uses the Cooper Hewitt database to generate art peices through a color picker functionality. The user can press a colored button to generate an artwork that has the input color. A random art work will return listing the title, medium, and full color palatte. This is basically a search tool for finding art with a specific color.

## API and Data Sample
[API:] (https://api.collection.cooperhewitt.org/rest/)
API endpoint that grabs colors based off Object ID of one of the museum objects:
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
Another endpoint that returns all information about an object, including its ID and IMG URL.
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
[https://wireframe.cc/3G5d96](google.com)


### MVP/PostMVP

#### MVP 
- Create color picker functionality with buttons
- Use 2 API endpoints 
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
|Feb 22-23| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Feb 23| Continue working on project / Project Approval / Start Psuedocode| Incomplete
|Feb 24| Pseudocode, create the Core Application Structure (HTML, CSS, etc.), and outline functions | Incomplete
|Feb 24| Work on JavaScript and set up event listeners| Incomplete
|Feb 25| Create basic styling in CSS, debug the Javascript, and test for functionality | Incomplete
|Feb 26| Develop styling in CSS, and work on post-MVP's including a mulitple parameter search | Incomplete
|March 1| Presentations | Incomplete

## Priority Matrix
[priority matrix:](https://lucid.app/lucidchart/invitations/accept/1194e4e0-8e7a-4e6b-bbaa-8b69f5ed40aa)

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Research | H | 3hrs| 3.5hrs | 3.5hrs |
| Making Project Proposal | H | 3hrs| 3hrs | 3hrs |
| Adding Psuedocode | H | 2hrs| - | - |
| Retreiving the API Endpoints necessary | H | 1hrs| - | - |
| Testing API Endpoints | H | 2hrs| - | - |
| Make Try/Catch | H | 1hrs | - | - |
| Add Axios and Await | H | 1hrs| - |  |
| Create HTML structure | H | 1hrs| - | - |
| Make CSS buttons and flexboxes | H | 3hrs| - | - |
| Set up JS forms | H | 3hrs| - | - |
| Add Eventlisteners | H | 3hrs| - | - |
| Grab user input | H | 2hrs| - | - |
| Link user's color choice to returned object ID's | H | 3hrs| - | - |
| Return image of the object ID | H | 2hrs| - | - |
| Add mediaQuery | H | 2hrs| - | - |
| Format response and parameters | H | 2.5hrs| - | - |
| Test functionality | H | 3hrs| - | - |
| Debug | H | 3hrs| - | - |
| Add CSS picture frame | H | 3hrs| - | - |
| Re-format page | H | 3hrs| - | - |
| Style buttons and text responses | H | 3hrs| - | - |



## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
