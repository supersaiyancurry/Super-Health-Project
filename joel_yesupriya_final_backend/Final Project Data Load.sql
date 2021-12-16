INSERT INTO patient (first_name, last_name, ssn, street, city, state, postal, age, height, weight, insurance, gender)
VALUES 
('Joel', 'Yesupriya', '983-85-8274', 'Narrows Lane', 'Silver Spring', 'MD', '20906', 24, 72, 190, 'AETNA', 'male'),
('Nick', 'Colburn', '466-85-5378', 'Brightshire Lane', 'Silver Spring', 'MD', '20906', 24, 67, 180, 'Kaiser Foundation', 'male'),
('Danny', 'Lee', '909-85-3754', 'Cold Meadow Way', 'Silver Spring', 'MD', '20906', 24, 52, 250, 'Highmark', 'male'),
('Bob', 'Stevenson', '604-87-8274', 'Merrifields Drive', 'Baltimore', 'MD', '30485', 24, 70, 200, 'HCSC', 'male'),
('James', 'Jowers', '304-85-3740', 'Black Rose Lane', 'Baltimore', 'MD', '03845-3948', 28, 60, 230, 'Cigna Health', 'male'),
('Carly', 'Campbell', '384-04-8395', 'S. Ellwood Lane', 'Houston', 'TX', '38503-9483', 26, 50, 200, 'HIP Insurance', 'female'),
('Sarah', 'Shelley', '495-39-9374', 'N. East Avenue', 'Seattle', 'WA', '43937', 23, 48, 150, 'Blue Cross', 'female'),
('Stacy', 'Powell', '947-76-8935', 'S. East Avenue', 'Dundalk', 'MD', '93857', 26, 58, 170, 'Carefirst Inc.', 'female'),
('Hannah', 'Bergers', '153-80-0248', 'Dandelion Road', 'Phoenix', 'AZ', '39573', 20, 55, 160, 'Unitedhealth', 'female'),
('John', 'Jackson', '904-20-4938', 'Brokenway Road', 'Los Angeles', 'CA', '84294', 25, 62, 190, 'Highmark', 'male');  

INSERT INTO encounter (notes, visit_code, provider, billing_code, icd10, total_cost, copay, chief_complaint, pulse, systolic, diastolic, date, patient_id)
VALUES
('last appointment: 2 months ago', 'A5A 9T4', 'AETNA', '123.456.789-12', 'A10', 20, 19.99, 'sore back', 70, 90, 60, '10/10/2019', 1),
(null, 'P43 0K4', 'AETNA', '939.049.038-34', 'P49', 20, 19.99, 'twisted ankle', 100, 120, 80, '10/28/2019', 1),

(null, 'H9K 5J7', 'HCSC', '123.456.789-12', 'A84', 20, 20, 'fractured wrist', null, 96, 75, '4/14/2019', 2),
(null, 'F5U 0K4', 'HIP Insurance', '939.049.038-34', 'P84', 20, 20, 'headache', 84, 107, 64, '5/24/2018', 2),

(null, 'U6J 4D6', 'Carefirst Inc.', '948.485.058-12', 'P48', 20, 20, 'tongue bruise', 85, 100, 69, '4/14/2019', 3),
(null, 'F4G 3H5', 'Carefirst Inc.', '394.058.103-49', 'B49', 20, 20, 'headache', 95, 104, 75, '5/24/2018', 3),

(null, 'L4J 9F6', 'HCSC', '384.037.739-49', 'G47', 20, 20, 'wrist cut', 74, 111, 63, '5/22/2013', 4),
('first appointment in 5 years', 'N5G 4H7', 'Unitedhealth', '904.058.103-49', 'D94', 20, 20, 'nausea', 72, 100, 60, '2/18/2015', 4),

(null, 'D4B 4F8', 'Highmark', '384.049.483-44', 'F84', 20, 20, 'stomach pain', 92, 104, 74, '11/23/2007', 5),
('first appointment', 'N5G 4H7', 'Highmark', '948.387.123-95', 'B94', 20, 20, 'eye pain', 81, 94, 72, '8/9/2012', 5),

('last appointment: 1 month ago', 'H8H 9T4', 'Unitedhealth', '123.948.789-12', 'B10', 20, 19.99, 'sore toe', 70, 90, 60, '10/10/2019', 6),
(null, 'G43 0K4', 'AETNA', '939.049.038-34', 'F43', 20, 19.99, 'fractured spine', 100, 120, 80, '10/28/2015', 6),

(null, 'P4B 5G7', 'HCSC', '123.456.789-12', 'A84', 20, 20, 'fractured wrist', null, 96, 75, '4/14/2019', 7),
(null, 'F5H 5K4', 'HIP Insurance', '939.937.038-34', 'P44', 20, 20, 'head bruise', 84, 107, 64, '5/23/2018', 7),

(null, 'U7F 4H6', 'Carefirst Inc.', '054.485.058-12', 'J48', 20, 20, 'tongue cut', 85, 100, 69, '3/14/2019', 8),
(null, 'V3V 3T5', 'Carefirst Inc.', '948.058.103-49', 'B49', 20, 20, 'headache', 95, 104, 75, '5/14/2018', 8),

(null, 'B4J 9F7', 'HCSC', '123.037.739-49', 'K47', 20, 20, 'twisted wrist', 74, 111, 63, '5/22/2020', 9),
(null, 'F5G 3H7', 'Unitedhealth', '100.058.103-49', 'F94', 20, 20, 'nausea', 72, 100, 60, '4/10/2012', 9),

(null, 'K6F 4F8', 'Highmark', '957.937.483-44', 'L84', 20, 20, 'stomach pain', 92, 104, 74, '11/23/2015', 10),
('first appointment', 'J3F 2T8', 'Highmark', '937.947.123-95', 'D37', 20, 20, 'eye sore', 81, 94, 72, '6/9/2016', 10)