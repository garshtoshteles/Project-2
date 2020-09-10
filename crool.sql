DROP DATABASE IF EXISTS db_Crool;
CREATE DATABASE db_Crool;

CREATE TABLE insults (
    id INT NOT NULL AUTO_INCREMENT,
    Contents VARCHAR(100),
    Intensity INT NOT NULL,
    PRIMARY KEY (id)
);
USE db_Crool;
INSERT INTO insults (Contents, Intensity)
VALUES (
        (
            "You're about as much use as a condom machine in the Vatican",
            1
        ),
        (
            "Some people were dropped on their head as children, You must have been thrown at the wall",
            2
        ),
        (
            "You need me to be mean to you because even your enemies can't stand talking to you",
            2
        ),
        ("Your friends merely tolerate you", 2),
        ("Anyone who ever loved you was wrong", 2),
        ("You're a perfect before picture", 1),
        ("I treasure the time we spend apart", 1),
        ("Your parents must be so ashamed", 2),
        (
            "You spend all this time on the computer because you're so deeply rejected by society",
            2
        ),
        ("I miss having not known you", 2),
        (
            "You know, you should slip into something that would be more comfortable, how about a coma?",
            1
        ),
        ("You turn stomachs, not heads", 1),
        (
            "You have the tact of a brick and the depth of a shot glass",
            1
        ),
        ("Who ties your shoes for you in the morning?", 2),
        (
            "You're the scum at the bottom of the gene pool",
            2
        ),
        ("These aren't insults; they're descriptions", 1),
        (
            "Don't get down on yourself; there are plenty of other worthless people out there",
            1
        ),
        (
            "How'd you get on the computer, did someone leave your cage unlocked?",
            1
        ),
        ("No need to say anything, smooth-brain", 1),
        (
            "You're not totally useless - you can be used as a poor example",
            2
        ),
        (
            "I've met people like you before, the psych ward is an interesting place",
            1
        ),
        (
            "The trash gets picked up tomorrow - you should get ready",
            1
        ),
        (
            "Stupid people can believe in anything, so believe in yourself",
            1
        ),
        (
            "Somewhere in France, a cathedral is missing a gargoyle",
            1
        ),
        (
            "Your life is more about regret management than goal achievement",
            2
        ),
    );