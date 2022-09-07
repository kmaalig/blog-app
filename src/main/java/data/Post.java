package data;

// Import lombok to utilize annotations
import lombok.*;
// Empty constructor imported from lombok
@NoArgsConstructor
// Full constructor imported from lombok
@AllArgsConstructor
// Getters & Setters imported from lombok
@Getter
@Setter
@ToString

public class Post {
    // Private Fields
    private Long id;
    private String title;
    private String content;
}