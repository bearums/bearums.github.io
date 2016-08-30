package solarSystemAnimation;
import javax.swing.*;
import java.awt.*;
/**
 *  animation applet with
 * start, stop and exit buttons.
 */
public class Animation {
  /** Create and display JFrame containing animation GUI panel */
  public static void main(String[] args) {
	  
	 AnimationPanel.generatePlanets(); // create planets 
	 
    SwingUtilities.invokeLater(new Runnable() {
      public void run() {
        JFrame frame = new JFrame("Animation demo");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(1000,1000);
        JPanel panel = new AnimationGuiPanel();
        frame.add(panel);
        frame.setVisible(true);
      }
    });
  }
}
